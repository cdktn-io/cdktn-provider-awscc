# `dataAwsccElasticacheReplicationGroup` Submodule <a name="`dataAwsccElasticacheReplicationGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheReplicationGroup <a name="DataAwsccElasticacheReplicationGroup" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_replication_group awscc_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_replication_group#id DataAwsccElasticacheReplicationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccElasticacheReplicationGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccElasticacheReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.atRestEncryptionEnabled">at_rest_encryption_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSecurityGroupNames">cache_security_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSubnetGroupName">cache_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.clusterMode">cluster_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.configurationEndPoint">configuration_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference">DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dataTieringEnabled">data_tiering_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.durability">durability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.effectiveDurability">effective_durability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.globalReplicationGroupId">global_replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.ipDiscovery">ip_discovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.logDeliveryConfigurations">log_delivery_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.multiAzEnabled">multi_az_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.nodeGroupConfiguration">node_group_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList">DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numCacheClusters">num_cache_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredCacheClusterAZs">preferred_cache_cluster_a_zs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryClusterId">primary_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryEndPoint">primary_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference">DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readEndPoint">read_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference">DataAwsccElasticacheReplicationGroupReadEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readerEndPoint">reader_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference">DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicasPerNodeGroup">replicas_per_node_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupDescription">replication_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshottingClusterId">snapshotting_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList">DataAwsccElasticacheReplicationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionEnabled">transit_encryption_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.userGroupIds">user_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `at_rest_encryption_enabled`<sup>Required</sup> <a name="at_rest_encryption_enabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```python
at_rest_encryption_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `automatic_failover_enabled`<sup>Required</sup> <a name="automatic_failover_enabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `cache_parameter_group_name`<sup>Required</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheParameterGroupName"></a>

```python
cache_parameter_group_name: str
```

- *Type:* str

---

##### `cache_security_group_names`<sup>Required</sup> <a name="cache_security_group_names" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSecurityGroupNames"></a>

```python
cache_security_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_subnet_group_name`<sup>Required</sup> <a name="cache_subnet_group_name" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.cacheSubnetGroupName"></a>

```python
cache_subnet_group_name: str
```

- *Type:* str

---

##### `cluster_mode`<sup>Required</sup> <a name="cluster_mode" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.clusterMode"></a>

```python
cluster_mode: str
```

- *Type:* str

---

##### `configuration_end_point`<sup>Required</sup> <a name="configuration_end_point" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.configurationEndPoint"></a>

```python
configuration_end_point: DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference">DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference</a>

---

##### `data_tiering_enabled`<sup>Required</sup> <a name="data_tiering_enabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```python
data_tiering_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `durability`<sup>Required</sup> <a name="durability" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.durability"></a>

```python
durability: str
```

- *Type:* str

---

##### `effective_durability`<sup>Required</sup> <a name="effective_durability" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.effectiveDurability"></a>

```python
effective_durability: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `global_replication_group_id`<sup>Required</sup> <a name="global_replication_group_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```python
global_replication_group_id: str
```

- *Type:* str

---

##### `ip_discovery`<sup>Required</sup> <a name="ip_discovery" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.ipDiscovery"></a>

```python
ip_discovery: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `log_delivery_configurations`<sup>Required</sup> <a name="log_delivery_configurations" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.logDeliveryConfigurations"></a>

```python
log_delivery_configurations: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList</a>

---

##### `multi_az_enabled`<sup>Required</sup> <a name="multi_az_enabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.multiAzEnabled"></a>

```python
multi_az_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `node_group_configuration`<sup>Required</sup> <a name="node_group_configuration" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.nodeGroupConfiguration"></a>

```python
node_group_configuration: DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList">DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList</a>

---

##### `notification_topic_arn`<sup>Required</sup> <a name="notification_topic_arn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.notificationTopicArn"></a>

```python
notification_topic_arn: str
```

- *Type:* str

---

##### `num_cache_clusters`<sup>Required</sup> <a name="num_cache_clusters" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numCacheClusters"></a>

```python
num_cache_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_node_groups`<sup>Required</sup> <a name="num_node_groups" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_cache_cluster_a_zs`<sup>Required</sup> <a name="preferred_cache_cluster_a_zs" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredCacheClusterAZs"></a>

```python
preferred_cache_cluster_a_zs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `primary_cluster_id`<sup>Required</sup> <a name="primary_cluster_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryClusterId"></a>

```python
primary_cluster_id: str
```

- *Type:* str

---

##### `primary_end_point`<sup>Required</sup> <a name="primary_end_point" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.primaryEndPoint"></a>

```python
primary_end_point: DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference">DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference</a>

---

##### `read_end_point`<sup>Required</sup> <a name="read_end_point" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readEndPoint"></a>

```python
read_end_point: DataAwsccElasticacheReplicationGroupReadEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference">DataAwsccElasticacheReplicationGroupReadEndPointOutputReference</a>

---

##### `reader_end_point`<sup>Required</sup> <a name="reader_end_point" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.readerEndPoint"></a>

```python
reader_end_point: DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference">DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference</a>

---

##### `replicas_per_node_group`<sup>Required</sup> <a name="replicas_per_node_group" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```python
replicas_per_node_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_group_description`<sup>Required</sup> <a name="replication_group_description" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```python
replication_group_description: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns`<sup>Required</sup> <a name="snapshot_arns" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotArns"></a>

```python
snapshot_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshotting_cluster_id`<sup>Required</sup> <a name="snapshotting_cluster_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshottingClusterId"></a>

```python
snapshotting_cluster_id: str
```

- *Type:* str

---

##### `snapshot_window`<sup>Required</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tags"></a>

```python
tags: DataAwsccElasticacheReplicationGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList">DataAwsccElasticacheReplicationGroupTagsList</a>

---

##### `transit_encryption_enabled`<sup>Required</sup> <a name="transit_encryption_enabled" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```python
transit_encryption_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `transit_encryption_mode`<sup>Required</sup> <a name="transit_encryption_mode" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.transitEncryptionMode"></a>

```python
transit_encryption_mode: str
```

- *Type:* str

---

##### `user_group_ids`<sup>Required</sup> <a name="user_group_ids" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.userGroupIds"></a>

```python
user_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheReplicationGroupConfig <a name="DataAwsccElasticacheReplicationGroupConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_replication_group#id DataAwsccElasticacheReplicationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheReplicationGroupConfigurationEndPoint <a name="DataAwsccElasticacheReplicationGroupConfigurationEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint()
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations()
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails()
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails()
```


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails()
```


### DataAwsccElasticacheReplicationGroupNodeGroupConfiguration <a name="DataAwsccElasticacheReplicationGroupNodeGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration()
```


### DataAwsccElasticacheReplicationGroupPrimaryEndPoint <a name="DataAwsccElasticacheReplicationGroupPrimaryEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint()
```


### DataAwsccElasticacheReplicationGroupReadEndPoint <a name="DataAwsccElasticacheReplicationGroupReadEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint()
```


### DataAwsccElasticacheReplicationGroupReaderEndPoint <a name="DataAwsccElasticacheReplicationGroupReaderEndPoint" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint()
```


### DataAwsccElasticacheReplicationGroupTags <a name="DataAwsccElasticacheReplicationGroupTags" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint">DataAwsccElasticacheReplicationGroupConfigurationEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupConfigurationEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupConfigurationEndPoint">DataAwsccElasticacheReplicationGroupConfigurationEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">cloudwatch_logs_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">kinesis_firehose_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_details`<sup>Required</sup> <a name="cloudwatch_logs_details" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```python
cloudwatch_logs_details: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `kinesis_firehose_details`<sup>Required</sup> <a name="kinesis_firehose_details" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```python
kinesis_firehose_details: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference <a name="DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails">destination_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_details`<sup>Required</sup> <a name="destination_details" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```python
destination_details: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations">DataAwsccElasticacheReplicationGroupLogDeliveryConfigurations</a>

---


### DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList <a name="DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference <a name="DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId">node_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone">primary_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones">replica_availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots">slots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration">DataAwsccElasticacheReplicationGroupNodeGroupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_group_id`<sup>Required</sup> <a name="node_group_id" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId"></a>

```python
node_group_id: str
```

- *Type:* str

---

##### `primary_availability_zone`<sup>Required</sup> <a name="primary_availability_zone" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone"></a>

```python
primary_availability_zone: str
```

- *Type:* str

---

##### `replica_availability_zones`<sup>Required</sup> <a name="replica_availability_zones" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones"></a>

```python
replica_availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slots`<sup>Required</sup> <a name="slots" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots"></a>

```python
slots: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupNodeGroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupNodeGroupConfiguration">DataAwsccElasticacheReplicationGroupNodeGroupConfiguration</a>

---


### DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint">DataAwsccElasticacheReplicationGroupPrimaryEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupPrimaryEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupPrimaryEndPoint">DataAwsccElasticacheReplicationGroupPrimaryEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupReadEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupReadEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addresses">addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList">addresses_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.ports">ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.portsList">ports_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint">DataAwsccElasticacheReplicationGroupReadEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addresses"></a>

```python
addresses: str
```

- *Type:* str

---

##### `addresses_list`<sup>Required</sup> <a name="addresses_list" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList"></a>

```python
addresses_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.ports"></a>

```python
ports: str
```

- *Type:* str

---

##### `ports_list`<sup>Required</sup> <a name="ports_list" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.portsList"></a>

```python
ports_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupReadEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReadEndPoint">DataAwsccElasticacheReplicationGroupReadEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference <a name="DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint">DataAwsccElasticacheReplicationGroupReaderEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupReaderEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupReaderEndPoint">DataAwsccElasticacheReplicationGroupReaderEndPoint</a>

---


### DataAwsccElasticacheReplicationGroupTagsList <a name="DataAwsccElasticacheReplicationGroupTagsList" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticacheReplicationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticacheReplicationGroupTagsOutputReference <a name="DataAwsccElasticacheReplicationGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticache_replication_group

dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags">DataAwsccElasticacheReplicationGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticacheReplicationGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheReplicationGroup.DataAwsccElasticacheReplicationGroupTags">DataAwsccElasticacheReplicationGroupTags</a>

---



