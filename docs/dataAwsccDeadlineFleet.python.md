# `dataAwsccDeadlineFleet` Submodule <a name="`dataAwsccDeadlineFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDeadlineFleet <a name="DataAwsccDeadlineFleet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/deadline_fleet awscc_deadline_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/deadline_fleet#id DataAwsccDeadlineFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDeadlineFleet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDeadlineFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDeadlineFleet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDeadlineFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/deadline_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDeadlineFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference">DataAwsccDeadlineFleetCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.farmId">farm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.hostConfiguration">host_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference">DataAwsccDeadlineFleetHostConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.maxWorkerCount">max_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.minWorkerCount">min_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList">DataAwsccDeadlineFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.capabilities"></a>

```python
capabilities: DataAwsccDeadlineFleetCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference">DataAwsccDeadlineFleetCapabilitiesOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.configuration"></a>

```python
configuration: DataAwsccDeadlineFleetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.farmId"></a>

```python
farm_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_configuration`<sup>Required</sup> <a name="host_configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.hostConfiguration"></a>

```python
host_configuration: DataAwsccDeadlineFleetHostConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference">DataAwsccDeadlineFleetHostConfigurationOutputReference</a>

---

##### `max_worker_count`<sup>Required</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.maxWorkerCount"></a>

```python
max_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_worker_count`<sup>Required</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.minWorkerCount"></a>

```python
min_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tags"></a>

```python
tags: DataAwsccDeadlineFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList">DataAwsccDeadlineFleetTagsList</a>

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDeadlineFleetCapabilities <a name="DataAwsccDeadlineFleetCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities()
```


### DataAwsccDeadlineFleetCapabilitiesAmounts <a name="DataAwsccDeadlineFleetCapabilitiesAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts()
```


### DataAwsccDeadlineFleetCapabilitiesAttributes <a name="DataAwsccDeadlineFleetCapabilitiesAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes()
```


### DataAwsccDeadlineFleetConfig <a name="DataAwsccDeadlineFleetConfig" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/deadline_fleet#id DataAwsccDeadlineFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDeadlineFleetConfiguration <a name="DataAwsccDeadlineFleetConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration()
```


### DataAwsccDeadlineFleetConfigurationCustomerManaged <a name="DataAwsccDeadlineFleetConfigurationCustomerManaged" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB()
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2 <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration()
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration()
```


### DataAwsccDeadlineFleetHostConfiguration <a name="DataAwsccDeadlineFleetHostConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration()
```


### DataAwsccDeadlineFleetTags <a name="DataAwsccDeadlineFleetTags" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDeadlineFleetCapabilitiesAmountsList <a name="DataAwsccDeadlineFleetCapabilitiesAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts">DataAwsccDeadlineFleetCapabilitiesAmounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetCapabilitiesAmounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts">DataAwsccDeadlineFleetCapabilitiesAmounts</a>

---


### DataAwsccDeadlineFleetCapabilitiesAttributesList <a name="DataAwsccDeadlineFleetCapabilitiesAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes">DataAwsccDeadlineFleetCapabilitiesAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetCapabilitiesAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes">DataAwsccDeadlineFleetCapabilitiesAttributes</a>

---


### DataAwsccDeadlineFleetCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.amounts">amounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList">DataAwsccDeadlineFleetCapabilitiesAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList">DataAwsccDeadlineFleetCapabilitiesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities">DataAwsccDeadlineFleetCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.amounts"></a>

```python
amounts: DataAwsccDeadlineFleetCapabilitiesAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList">DataAwsccDeadlineFleetCapabilitiesAmountsList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.attributes"></a>

```python
attributes: DataAwsccDeadlineFleetCapabilitiesAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList">DataAwsccDeadlineFleetCapabilitiesAttributesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities">DataAwsccDeadlineFleetCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">scale_out_workers_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount">standby_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">worker_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_out_workers_per_minute`<sup>Required</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```python
scale_out_workers_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_worker_count`<sup>Required</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```python
standby_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_idle_duration_seconds`<sup>Required</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```python
worker_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId">storage_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode">tag_propagation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities">worker_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged">DataAwsccDeadlineFleetConfigurationCustomerManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_configuration`<sup>Required</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `storage_profile_id`<sup>Required</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId"></a>

```python
storage_profile_id: str
```

- *Type:* str

---

##### `tag_propagation_mode`<sup>Required</sup> <a name="tag_propagation_mode" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode"></a>

```python
tag_propagation_mode: str
```

- *Type:* str

---

##### `worker_capabilities`<sup>Required</sup> <a name="worker_capabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities"></a>

```python
worker_capabilities: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged">DataAwsccDeadlineFleetConfigurationCustomerManaged</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB">accelerator_total_memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType">cpu_architecture_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts">custom_amounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB">memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount">v_cpu_count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a>

---

##### `accelerator_total_memory_mi_b`<sup>Required</sup> <a name="accelerator_total_memory_mi_b" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB"></a>

```python
accelerator_total_memory_mi_b: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_architecture_type`<sup>Required</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```python
cpu_architecture_type: str
```

- *Type:* str

---

##### `custom_amounts`<sup>Required</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts"></a>

```python
custom_amounts: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a>

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes"></a>

```python
custom_attributes: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a>

---

##### `memory_mi_b`<sup>Required</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB"></a>

```python
memory_mi_b: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a>

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `v_cpu_count`<sup>Required</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount"></a>

```python
v_cpu_count: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---


### DataAwsccDeadlineFleetConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.customerManaged">customer_managed</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.serviceManagedEc2">service_managed_ec2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration">DataAwsccDeadlineFleetConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed`<sup>Required</sup> <a name="customer_managed" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.customerManaged"></a>

```python
customer_managed: DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference</a>

---

##### `service_managed_ec2`<sup>Required</sup> <a name="service_managed_ec2" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.serviceManagedEc2"></a>

```python
service_managed_ec2: DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration">DataAwsccDeadlineFleetConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">scale_out_workers_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount">standby_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">worker_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_out_workers_per_minute`<sup>Required</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```python
scale_out_workers_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_worker_count`<sup>Required</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```python
standby_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_idle_duration_seconds`<sup>Required</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```python
worker_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count">count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections">selections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count"></a>

```python
count: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a>

---

##### `selections`<sup>Required</sup> <a name="selections" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections"></a>

```python
selections: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities">accelerator_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes">allowed_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType">cpu_architecture_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts">custom_amounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB">memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume">root_ebs_volume</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount">v_cpu_count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_capabilities`<sup>Required</sup> <a name="accelerator_capabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities"></a>

```python
accelerator_capabilities: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a>

---

##### `allowed_instance_types`<sup>Required</sup> <a name="allowed_instance_types" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes"></a>

```python
allowed_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_architecture_type`<sup>Required</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```python
cpu_architecture_type: str
```

- *Type:* str

---

##### `custom_amounts`<sup>Required</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts"></a>

```python
custom_amounts: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a>

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes"></a>

```python
custom_attributes: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a>

---

##### `excluded_instance_types`<sup>Required</sup> <a name="excluded_instance_types" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_mi_b`<sup>Required</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB"></a>

```python
memory_mi_b: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a>

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `root_ebs_volume`<sup>Required</sup> <a name="root_ebs_volume" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume"></a>

```python
root_ebs_volume: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a>

---

##### `v_cpu_count`<sup>Required</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount"></a>

```python
v_cpu_count: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB">size_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB">throughput_mi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gi_b`<sup>Required</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB"></a>

```python
size_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mi_b`<sup>Required</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB"></a>

```python
throughput_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities">instance_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions">instance_market_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration">persistent_volume_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId">storage_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2">DataAwsccDeadlineFleetConfigurationServiceManagedEc2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_configuration`<sup>Required</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a>

---

##### `instance_capabilities`<sup>Required</sup> <a name="instance_capabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities"></a>

```python
instance_capabilities: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a>

---

##### `instance_market_options`<sup>Required</sup> <a name="instance_market_options" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions"></a>

```python
instance_market_options: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a>

---

##### `persistent_volume_configuration`<sup>Required</sup> <a name="persistent_volume_configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration"></a>

```python
persistent_volume_configuration: DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a>

---

##### `storage_profile_id`<sup>Required</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId"></a>

```python
storage_profile_id: str
```

- *Type:* str

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2">DataAwsccDeadlineFleetConfigurationServiceManagedEc2</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours">last_used_ttl_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB">size_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB">throughput_mi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_used_ttl_hours`<sup>Required</sup> <a name="last_used_ttl_hours" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours"></a>

```python
last_used_ttl_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `size_gi_b`<sup>Required</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB"></a>

```python
size_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mi_b`<sup>Required</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB"></a>

```python
throughput_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns">resource_configuration_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration_arns`<sup>Required</sup> <a name="resource_configuration_arns" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns"></a>

```python
resource_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---


### DataAwsccDeadlineFleetHostConfigurationOutputReference <a name="DataAwsccDeadlineFleetHostConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptBody">script_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds">script_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration">DataAwsccDeadlineFleetHostConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_body`<sup>Required</sup> <a name="script_body" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptBody"></a>

```python
script_body: str
```

- *Type:* str

---

##### `script_timeout_seconds`<sup>Required</sup> <a name="script_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds"></a>

```python
script_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetHostConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration">DataAwsccDeadlineFleetHostConfiguration</a>

---


### DataAwsccDeadlineFleetTagsList <a name="DataAwsccDeadlineFleetTagsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDeadlineFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDeadlineFleetTagsOutputReference <a name="DataAwsccDeadlineFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_deadline_fleet

dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags">DataAwsccDeadlineFleetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDeadlineFleetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags">DataAwsccDeadlineFleetTags</a>

---



