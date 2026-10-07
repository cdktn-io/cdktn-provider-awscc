# `dataAwsccElasticacheSnapshot` Submodule <a name="`dataAwsccElasticacheSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheSnapshot <a name="DataAwsccElasticacheSnapshot" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/elasticache_snapshot awscc_elasticache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/elasticache_snapshot#id DataAwsccElasticacheSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccElasticacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccElasticacheSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccElasticacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/elasticache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.automaticFailover">automatic_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheClusterCreateTime">cache_cluster_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheSubnetGroupName">cache_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.dataTiering">data_tiering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.nodeSnapshots">node_snapshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList">DataAwsccElasticacheSnapshotNodeSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.numCacheNodes">num_cache_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.preferredAvailabilityZone">preferred_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.replicationGroupDescription">replication_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotSource">snapshot_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotStatus">snapshot_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList">DataAwsccElasticacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `automatic_failover`<sup>Required</sup> <a name="automatic_failover" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.automaticFailover"></a>

```python
automatic_failover: str
```

- *Type:* str

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_cluster_create_time`<sup>Required</sup> <a name="cache_cluster_create_time" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheClusterCreateTime"></a>

```python
cache_cluster_create_time: str
```

- *Type:* str

---

##### `cache_cluster_id`<sup>Required</sup> <a name="cache_cluster_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `cache_parameter_group_name`<sup>Required</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheParameterGroupName"></a>

```python
cache_parameter_group_name: str
```

- *Type:* str

---

##### `cache_subnet_group_name`<sup>Required</sup> <a name="cache_subnet_group_name" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.cacheSubnetGroupName"></a>

```python
cache_subnet_group_name: str
```

- *Type:* str

---

##### `data_tiering`<sup>Required</sup> <a name="data_tiering" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.dataTiering"></a>

```python
data_tiering: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `node_snapshots`<sup>Required</sup> <a name="node_snapshots" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.nodeSnapshots"></a>

```python
node_snapshots: DataAwsccElasticacheSnapshotNodeSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList">DataAwsccElasticacheSnapshotNodeSnapshotsList</a>

---

##### `num_cache_nodes`<sup>Required</sup> <a name="num_cache_nodes" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.numCacheNodes"></a>

```python
num_cache_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_node_groups`<sup>Required</sup> <a name="num_node_groups" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_availability_zone`<sup>Required</sup> <a name="preferred_availability_zone" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.preferredAvailabilityZone"></a>

```python
preferred_availability_zone: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `replication_group_description`<sup>Required</sup> <a name="replication_group_description" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.replicationGroupDescription"></a>

```python
replication_group_description: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_source`<sup>Required</sup> <a name="snapshot_source" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotSource"></a>

```python
snapshot_source: str
```

- *Type:* str

---

##### `snapshot_status`<sup>Required</sup> <a name="snapshot_status" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotStatus"></a>

```python
snapshot_status: str
```

- *Type:* str

---

##### `snapshot_window`<sup>Required</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.tags"></a>

```python
tags: DataAwsccElasticacheSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList">DataAwsccElasticacheSnapshotTagsList</a>

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheSnapshotConfig <a name="DataAwsccElasticacheSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/elasticache_snapshot#id DataAwsccElasticacheSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheSnapshotNodeSnapshots <a name="DataAwsccElasticacheSnapshotNodeSnapshots" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshots.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshots()
```


### DataAwsccElasticacheSnapshotTags <a name="DataAwsccElasticacheSnapshotTags" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheSnapshotNodeSnapshotsList <a name="DataAwsccElasticacheSnapshotNodeSnapshotsList" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference <a name="DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheClusterId">cache_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeCreateTime">cache_node_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeId">cache_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheSize">cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.nodeGroupId">node_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.snapshotCreateTime">snapshot_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshots">DataAwsccElasticacheSnapshotNodeSnapshots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_cluster_id`<sup>Required</sup> <a name="cache_cluster_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheClusterId"></a>

```python
cache_cluster_id: str
```

- *Type:* str

---

##### `cache_node_create_time`<sup>Required</sup> <a name="cache_node_create_time" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeCreateTime"></a>

```python
cache_node_create_time: str
```

- *Type:* str

---

##### `cache_node_id`<sup>Required</sup> <a name="cache_node_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheNodeId"></a>

```python
cache_node_id: str
```

- *Type:* str

---

##### `cache_size`<sup>Required</sup> <a name="cache_size" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.cacheSize"></a>

```python
cache_size: str
```

- *Type:* str

---

##### `node_group_id`<sup>Required</sup> <a name="node_group_id" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.nodeGroupId"></a>

```python
node_group_id: str
```

- *Type:* str

---

##### `snapshot_create_time`<sup>Required</sup> <a name="snapshot_create_time" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.snapshotCreateTime"></a>

```python
snapshot_create_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshotsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheSnapshotNodeSnapshots
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotNodeSnapshots">DataAwsccElasticacheSnapshotNodeSnapshots</a>

---


### DataAwsccElasticacheSnapshotTagsList <a name="DataAwsccElasticacheSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticacheSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticacheSnapshotTagsOutputReference <a name="DataAwsccElasticacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_snapshot

dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTags">DataAwsccElasticacheSnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheSnapshotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheSnapshot.DataAwsccElasticacheSnapshotTags">DataAwsccElasticacheSnapshotTags</a>

---



