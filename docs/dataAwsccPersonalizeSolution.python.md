# `dataAwsccPersonalizeSolution` Submodule <a name="`dataAwsccPersonalizeSolution` Submodule" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPersonalizeSolution <a name="DataAwsccPersonalizeSolution" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_solution awscc_personalize_solution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_solution#id DataAwsccPersonalizeSolution#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccPersonalizeSolution resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccPersonalizeSolution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccPersonalizeSolution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccPersonalizeSolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPersonalizeSolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performAutoMl">perform_auto_ml</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performHpo">perform_hpo</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.recipeArn">recipe_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionArn">solution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionConfig">solution_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList">DataAwsccPersonalizeSolutionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `perform_auto_ml`<sup>Required</sup> <a name="perform_auto_ml" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performAutoMl"></a>

```python
perform_auto_ml: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `perform_hpo`<sup>Required</sup> <a name="perform_hpo" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.performHpo"></a>

```python
perform_hpo: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `recipe_arn`<sup>Required</sup> <a name="recipe_arn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.recipeArn"></a>

```python
recipe_arn: str
```

- *Type:* str

---

##### `solution_arn`<sup>Required</sup> <a name="solution_arn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionArn"></a>

```python
solution_arn: str
```

- *Type:* str

---

##### `solution_config`<sup>Required</sup> <a name="solution_config" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.solutionConfig"></a>

```python
solution_config: DataAwsccPersonalizeSolutionSolutionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.tags"></a>

```python
tags: DataAwsccPersonalizeSolutionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList">DataAwsccPersonalizeSolutionTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPersonalizeSolutionConfig <a name="DataAwsccPersonalizeSolutionConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/personalize_solution#id DataAwsccPersonalizeSolution#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPersonalizeSolutionSolutionConfig <a name="DataAwsccPersonalizeSolutionSolutionConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig()
```


### DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig <a name="DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig()
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfig <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig()
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges()
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges()
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges()
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges()
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective()
```


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig()
```


### DataAwsccPersonalizeSolutionTags <a name="DataAwsccPersonalizeSolutionTags" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList">recipe_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `recipe_list`<sup>Required</sup> <a name="recipe_list" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList"></a>

```python
recipe_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfig</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges">categorical_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges">continuous_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges">integer_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categorical_hyper_parameter_ranges`<sup>Required</sup> <a name="categorical_hyper_parameter_ranges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges"></a>

```python
categorical_hyper_parameter_ranges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a>

---

##### `continuous_hyper_parameter_ranges`<sup>Required</sup> <a name="continuous_hyper_parameter_ranges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges"></a>

```python
continuous_hyper_parameter_ranges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a>

---

##### `integer_hyper_parameter_ranges`<sup>Required</sup> <a name="integer_hyper_parameter_ranges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges"></a>

```python
integer_hyper_parameter_ranges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex">metric_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_regex`<sup>Required</sup> <a name="metric_regex" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex"></a>

```python
metric_regex: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs">max_number_of_training_jobs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs">max_parallel_training_jobs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_number_of_training_jobs`<sup>Required</sup> <a name="max_number_of_training_jobs" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs"></a>

```python
max_number_of_training_jobs: str
```

- *Type:* str

---

##### `max_parallel_training_jobs`<sup>Required</sup> <a name="max_parallel_training_jobs" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs"></a>

```python
max_parallel_training_jobs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges">algorithm_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective">hpo_objective</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig">hpo_resource_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_hyper_parameter_ranges`<sup>Required</sup> <a name="algorithm_hyper_parameter_ranges" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges"></a>

```python
algorithm_hyper_parameter_ranges: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a>

---

##### `hpo_objective`<sup>Required</sup> <a name="hpo_objective" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective"></a>

```python
hpo_objective: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a>

---

##### `hpo_resource_config`<sup>Required</sup> <a name="hpo_resource_config" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig"></a>

```python
hpo_resource_config: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfigHpoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfig">DataAwsccPersonalizeSolutionSolutionConfigHpoConfig</a>

---


### DataAwsccPersonalizeSolutionSolutionConfigOutputReference <a name="DataAwsccPersonalizeSolutionSolutionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters">algorithm_hyper_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig">auto_ml_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold">event_value_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters">feature_transformation_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig">hpo_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig">DataAwsccPersonalizeSolutionSolutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_hyper_parameters`<sup>Required</sup> <a name="algorithm_hyper_parameters" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters"></a>

```python
algorithm_hyper_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `auto_ml_config`<sup>Required</sup> <a name="auto_ml_config" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig"></a>

```python
auto_ml_config: DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a>

---

##### `event_value_threshold`<sup>Required</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold"></a>

```python
event_value_threshold: str
```

- *Type:* str

---

##### `feature_transformation_parameters`<sup>Required</sup> <a name="feature_transformation_parameters" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters"></a>

```python
feature_transformation_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `hpo_config`<sup>Required</sup> <a name="hpo_config" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig"></a>

```python
hpo_config: DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference">DataAwsccPersonalizeSolutionSolutionConfigHpoConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionSolutionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionSolutionConfig">DataAwsccPersonalizeSolutionSolutionConfig</a>

---


### DataAwsccPersonalizeSolutionTagsList <a name="DataAwsccPersonalizeSolutionTagsList" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPersonalizeSolutionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPersonalizeSolutionTagsOutputReference <a name="DataAwsccPersonalizeSolutionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_personalize_solution

dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTags">DataAwsccPersonalizeSolutionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPersonalizeSolutionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPersonalizeSolution.DataAwsccPersonalizeSolutionTags">DataAwsccPersonalizeSolutionTags</a>

---



