# `dataAwsccB2BiPartnership` Submodule <a name="`dataAwsccB2BiPartnership` Submodule" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccB2BiPartnership <a name="DataAwsccB2BiPartnership" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/b2bi_partnership awscc_b2bi_partnership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/b2bi_partnership#id DataAwsccB2BiPartnership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccB2BiPartnership resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccB2BiPartnership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccB2BiPartnership to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccB2BiPartnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/b2bi_partnership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccB2BiPartnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilityOptions">capability_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipArn">partnership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipId">partnership_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList">DataAwsccB2BiPartnershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tradingPartnerId">trading_partner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capability_options`<sup>Required</sup> <a name="capability_options" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilityOptions"></a>

```python
capability_options: DataAwsccB2BiPartnershipCapabilityOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partnership_arn`<sup>Required</sup> <a name="partnership_arn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipArn"></a>

```python
partnership_arn: str
```

- *Type:* str

---

##### `partnership_id`<sup>Required</sup> <a name="partnership_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipId"></a>

```python
partnership_id: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tags"></a>

```python
tags: DataAwsccB2BiPartnershipTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList">DataAwsccB2BiPartnershipTagsList</a>

---

##### `trading_partner_id`<sup>Required</sup> <a name="trading_partner_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tradingPartnerId"></a>

```python
trading_partner_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccB2BiPartnershipCapabilityOptions <a name="DataAwsccB2BiPartnershipCapabilityOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions()
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi()
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12()
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders()
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions()
```


### DataAwsccB2BiPartnershipConfig <a name="DataAwsccB2BiPartnershipConfig" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/b2bi_partnership#id DataAwsccB2BiPartnership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccB2BiPartnershipTags <a name="DataAwsccB2BiPartnershipTags" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12"></a>

```python
x12: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment">functional_acknowledgment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment">technical_acknowledgment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `functional_acknowledgment`<sup>Required</sup> <a name="functional_acknowledgment" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment"></a>

```python
functional_acknowledgment: str
```

- *Type:* str

---

##### `technical_acknowledgment`<sup>Required</sup> <a name="technical_acknowledgment" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment"></a>

```python
technical_acknowledgment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions">acknowledgment_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acknowledgment_options`<sup>Required</sup> <a name="acknowledgment_options" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions"></a>

```python
acknowledgment_options: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12"></a>

```python
x12: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber">starting_functional_group_control_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber">starting_interchange_control_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber">starting_transaction_set_control_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `starting_functional_group_control_number`<sup>Required</sup> <a name="starting_functional_group_control_number" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber"></a>

```python
starting_functional_group_control_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `starting_interchange_control_number`<sup>Required</sup> <a name="starting_interchange_control_number" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber"></a>

```python
starting_interchange_control_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `starting_transaction_set_control_number`<sup>Required</sup> <a name="starting_transaction_set_control_number" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber"></a>

```python
starting_transaction_set_control_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator">component_separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator">data_element_separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator">segment_terminator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_separator`<sup>Required</sup> <a name="component_separator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator"></a>

```python
component_separator: str
```

- *Type:* str

---

##### `data_element_separator`<sup>Required</sup> <a name="data_element_separator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator"></a>

```python
data_element_separator: str
```

- *Type:* str

---

##### `segment_terminator`<sup>Required</sup> <a name="segment_terminator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator"></a>

```python
segment_terminator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode">application_receiver_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode">application_sender_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode">responsible_agency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_receiver_code`<sup>Required</sup> <a name="application_receiver_code" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode"></a>

```python
application_receiver_code: str
```

- *Type:* str

---

##### `application_sender_code`<sup>Required</sup> <a name="application_sender_code" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode"></a>

```python
application_sender_code: str
```

- *Type:* str

---

##### `responsible_agency_code`<sup>Required</sup> <a name="responsible_agency_code" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode"></a>

```python
responsible_agency_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode">acknowledgment_requested_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId">receiver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier">receiver_id_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator">repetition_separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId">sender_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier">sender_id_qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode">usage_indicator_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acknowledgment_requested_code`<sup>Required</sup> <a name="acknowledgment_requested_code" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode"></a>

```python
acknowledgment_requested_code: str
```

- *Type:* str

---

##### `receiver_id`<sup>Required</sup> <a name="receiver_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId"></a>

```python
receiver_id: str
```

- *Type:* str

---

##### `receiver_id_qualifier`<sup>Required</sup> <a name="receiver_id_qualifier" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier"></a>

```python
receiver_id_qualifier: str
```

- *Type:* str

---

##### `repetition_separator`<sup>Required</sup> <a name="repetition_separator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator"></a>

```python
repetition_separator: str
```

- *Type:* str

---

##### `sender_id`<sup>Required</sup> <a name="sender_id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId"></a>

```python
sender_id: str
```

- *Type:* str

---

##### `sender_id_qualifier`<sup>Required</sup> <a name="sender_id_qualifier" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier"></a>

```python
sender_id_qualifier: str
```

- *Type:* str

---

##### `usage_indicator_code`<sup>Required</sup> <a name="usage_indicator_code" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode"></a>

```python
usage_indicator_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers">control_numbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters">delimiters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders">functional_group_headers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat">gs05_time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders">interchange_control_headers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi">validate_edi</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `control_numbers`<sup>Required</sup> <a name="control_numbers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers"></a>

```python
control_numbers: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a>

---

##### `delimiters`<sup>Required</sup> <a name="delimiters" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters"></a>

```python
delimiters: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a>

---

##### `functional_group_headers`<sup>Required</sup> <a name="functional_group_headers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders"></a>

```python
functional_group_headers: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a>

---

##### `gs05_time_format`<sup>Required</sup> <a name="gs05_time_format" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat"></a>

```python
gs05_time_format: str
```

- *Type:* str

---

##### `interchange_control_headers`<sup>Required</sup> <a name="interchange_control_headers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders"></a>

```python
interchange_control_headers: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a>

---

##### `validate_edi`<sup>Required</sup> <a name="validate_edi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi"></a>

```python
validate_edi: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common">common</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions">wrap_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common"></a>

```python
common: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a>

---

##### `wrap_options`<sup>Required</sup> <a name="wrap_options" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions"></a>

```python
wrap_options: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength">line_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator">line_terminator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy">wrap_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `line_length`<sup>Required</sup> <a name="line_length" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength"></a>

```python
line_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `line_terminator`<sup>Required</sup> <a name="line_terminator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator"></a>

```python
line_terminator: str
```

- *Type:* str

---

##### `wrap_by`<sup>Required</sup> <a name="wrap_by" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy"></a>

```python
wrap_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi">inbound_edi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi">outbound_edi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions">DataAwsccB2BiPartnershipCapabilityOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inbound_edi`<sup>Required</sup> <a name="inbound_edi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi"></a>

```python
inbound_edi: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a>

---

##### `outbound_edi`<sup>Required</sup> <a name="outbound_edi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi"></a>

```python
outbound_edi: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipCapabilityOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions">DataAwsccB2BiPartnershipCapabilityOptions</a>

---


### DataAwsccB2BiPartnershipTagsList <a name="DataAwsccB2BiPartnershipTagsList" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccB2BiPartnershipTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccB2BiPartnershipTagsOutputReference <a name="DataAwsccB2BiPartnershipTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_partnership

dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags">DataAwsccB2BiPartnershipTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiPartnershipTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags">DataAwsccB2BiPartnershipTags</a>

---



