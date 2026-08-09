# `dataAwsccGuarddutyFilter` Submodule <a name="`dataAwsccGuarddutyFilter` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyFilter <a name="DataAwsccGuarddutyFilter" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_filter awscc_guardduty_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_filter#id DataAwsccGuarddutyFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyFilter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGuarddutyFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGuarddutyFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGuarddutyFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference">DataAwsccGuarddutyFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.rank">rank</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList">DataAwsccGuarddutyFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.findingCriteria"></a>

```python
finding_criteria: DataAwsccGuarddutyFilterFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference">DataAwsccGuarddutyFilterFindingCriteriaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.rank"></a>

```python
rank: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tags"></a>

```python
tags: DataAwsccGuarddutyFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList">DataAwsccGuarddutyFilterTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyFilterConfig <a name="DataAwsccGuarddutyFilterConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/guardduty_filter#id DataAwsccGuarddutyFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyFilterFindingCriteria <a name="DataAwsccGuarddutyFilterFindingCriteria" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria()
```


### DataAwsccGuarddutyFilterFindingCriteriaCriterion <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion()
```


### DataAwsccGuarddutyFilterTags <a name="DataAwsccGuarddutyFilterTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyFilterFindingCriteriaCriterionMap <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference <a name="DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq">eq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan">greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual">greater_than_or_equal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt">gt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte">gte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan">less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual">less_than_or_equal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt">lt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte">lte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq">neq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion">DataAwsccGuarddutyFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `greater_than`<sup>Required</sup> <a name="greater_than" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan"></a>

```python
greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `greater_than_or_equal`<sup>Required</sup> <a name="greater_than_or_equal" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual"></a>

```python
greater_than_or_equal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gt`<sup>Required</sup> <a name="gt" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```python
gt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```python
gte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `less_than`<sup>Required</sup> <a name="less_than" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan"></a>

```python
less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `less_than_or_equal`<sup>Required</sup> <a name="less_than_or_equal" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual"></a>

```python
less_than_or_equal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lt`<sup>Required</sup> <a name="lt" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```python
lt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```python
lte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals`<sup>Required</sup> <a name="not_equals" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGuarddutyFilterFindingCriteriaCriterion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterion">DataAwsccGuarddutyFilterFindingCriteriaCriterion</a>

---


### DataAwsccGuarddutyFilterFindingCriteriaOutputReference <a name="DataAwsccGuarddutyFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap">DataAwsccGuarddutyFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria">DataAwsccGuarddutyFilterFindingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.criterion"></a>

```python
criterion: DataAwsccGuarddutyFilterFindingCriteriaCriterionMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaCriterionMap">DataAwsccGuarddutyFilterFindingCriteriaCriterionMap</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGuarddutyFilterFindingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterFindingCriteria">DataAwsccGuarddutyFilterFindingCriteria</a>

---


### DataAwsccGuarddutyFilterTagsList <a name="DataAwsccGuarddutyFilterTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGuarddutyFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGuarddutyFilterTagsOutputReference <a name="DataAwsccGuarddutyFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_filter

dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags">DataAwsccGuarddutyFilterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGuarddutyFilterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyFilter.DataAwsccGuarddutyFilterTags">DataAwsccGuarddutyFilterTags</a>

---



