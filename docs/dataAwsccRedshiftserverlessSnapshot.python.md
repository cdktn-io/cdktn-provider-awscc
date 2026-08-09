# `dataAwsccRedshiftserverlessSnapshot` Submodule <a name="`dataAwsccRedshiftserverlessSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftserverlessSnapshot <a name="DataAwsccRedshiftserverlessSnapshot" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshiftserverless_snapshot awscc_redshiftserverless_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshiftserverless_snapshot#id DataAwsccRedshiftserverlessSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftserverlessSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRedshiftserverlessSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRedshiftserverlessSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRedshiftserverlessSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshiftserverless_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftserverlessSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference">DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList">DataAwsccRedshiftserverlessSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.snapshot"></a>

```python
snapshot: DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference">DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference</a>

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.tags"></a>

```python
tags: DataAwsccRedshiftserverlessSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList">DataAwsccRedshiftserverlessSnapshotTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftserverlessSnapshotConfig <a name="DataAwsccRedshiftserverlessSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshiftserverless_snapshot#id DataAwsccRedshiftserverlessSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftserverlessSnapshotSnapshot <a name="DataAwsccRedshiftserverlessSnapshotSnapshot" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshot()
```


### DataAwsccRedshiftserverlessSnapshotTags <a name="DataAwsccRedshiftserverlessSnapshotTags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference <a name="DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.namespaceArn">namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.snapshotCreateTime">snapshot_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshot">DataAwsccRedshiftserverlessSnapshotSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `namespace_arn`<sup>Required</sup> <a name="namespace_arn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.namespaceArn"></a>

```python
namespace_arn: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

---

##### `snapshot_create_time`<sup>Required</sup> <a name="snapshot_create_time" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.snapshotCreateTime"></a>

```python
snapshot_create_time: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftserverlessSnapshotSnapshot
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotSnapshot">DataAwsccRedshiftserverlessSnapshotSnapshot</a>

---


### DataAwsccRedshiftserverlessSnapshotTagsList <a name="DataAwsccRedshiftserverlessSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRedshiftserverlessSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRedshiftserverlessSnapshotTagsOutputReference <a name="DataAwsccRedshiftserverlessSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshiftserverless_snapshot

dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTags">DataAwsccRedshiftserverlessSnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftserverlessSnapshotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessSnapshot.DataAwsccRedshiftserverlessSnapshotTags">DataAwsccRedshiftserverlessSnapshotTags</a>

---



