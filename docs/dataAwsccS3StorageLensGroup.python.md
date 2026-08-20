# `dataAwsccS3StorageLensGroup` Submodule <a name="`dataAwsccS3StorageLensGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3StorageLensGroup <a name="DataAwsccS3StorageLensGroup" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3_storage_lens_group awscc_s3_storage_lens_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3_storage_lens_group#id DataAwsccS3StorageLensGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccS3StorageLensGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccS3StorageLensGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccS3StorageLensGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccS3StorageLensGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3StorageLensGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference">DataAwsccS3StorageLensGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.storageLensGroupArn">storage_lens_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList">DataAwsccS3StorageLensGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.filter"></a>

```python
filter: DataAwsccS3StorageLensGroupFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference">DataAwsccS3StorageLensGroupFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_lens_group_arn`<sup>Required</sup> <a name="storage_lens_group_arn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.storageLensGroupArn"></a>

```python
storage_lens_group_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tags"></a>

```python
tags: DataAwsccS3StorageLensGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList">DataAwsccS3StorageLensGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3StorageLensGroupConfig <a name="DataAwsccS3StorageLensGroupConfig" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3_storage_lens_group#id DataAwsccS3StorageLensGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3StorageLensGroupFilter <a name="DataAwsccS3StorageLensGroupFilter" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter()
```


### DataAwsccS3StorageLensGroupFilterAnd <a name="DataAwsccS3StorageLensGroupFilterAnd" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd()
```


### DataAwsccS3StorageLensGroupFilterAndMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag()
```


### DataAwsccS3StorageLensGroupFilterAndMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge()
```


### DataAwsccS3StorageLensGroupFilterAndMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize()
```


### DataAwsccS3StorageLensGroupFilterMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag()
```


### DataAwsccS3StorageLensGroupFilterMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge()
```


### DataAwsccS3StorageLensGroupFilterMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize()
```


### DataAwsccS3StorageLensGroupFilterOr <a name="DataAwsccS3StorageLensGroupFilterOr" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr()
```


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag()
```


### DataAwsccS3StorageLensGroupFilterOrMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge()
```


### DataAwsccS3StorageLensGroupFilterOrMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize()
```


### DataAwsccS3StorageLensGroupTags <a name="DataAwsccS3StorageLensGroupTags" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag">DataAwsccS3StorageLensGroupFilterAndMatchAnyTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterAndMatchAnyTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag">DataAwsccS3StorageLensGroupFilterAndMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge">DataAwsccS3StorageLensGroupFilterAndMatchObjectAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_greater_than`<sup>Required</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than`<sup>Required</sup> <a name="days_less_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterAndMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge">DataAwsccS3StorageLensGroupFilterAndMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize">DataAwsccS3StorageLensGroupFilterAndMatchObjectSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_greater_than`<sup>Required</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than`<sup>Required</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterAndMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize">DataAwsccS3StorageLensGroupFilterAndMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterAndOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyTag">match_any_tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList">DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd">DataAwsccS3StorageLensGroupFilterAnd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_any_prefix`<sup>Required</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix`<sup>Required</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_tag`<sup>Required</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyTag"></a>

```python
match_any_tag: DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList">DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList</a>

---

##### `match_object_age`<sup>Required</sup> <a name="match_object_age" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectAge"></a>

```python
match_object_age: DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a>

---

##### `match_object_size`<sup>Required</sup> <a name="match_object_size" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectSize"></a>

```python
match_object_size: DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterAnd
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd">DataAwsccS3StorageLensGroupFilterAnd</a>

---


### DataAwsccS3StorageLensGroupFilterMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag">DataAwsccS3StorageLensGroupFilterMatchAnyTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterMatchAnyTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag">DataAwsccS3StorageLensGroupFilterMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge">DataAwsccS3StorageLensGroupFilterMatchObjectAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_greater_than`<sup>Required</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than`<sup>Required</sup> <a name="days_less_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge">DataAwsccS3StorageLensGroupFilterMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize">DataAwsccS3StorageLensGroupFilterMatchObjectSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_greater_than`<sup>Required</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than`<sup>Required</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize">DataAwsccS3StorageLensGroupFilterMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag">DataAwsccS3StorageLensGroupFilterOrMatchAnyTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterOrMatchAnyTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag">DataAwsccS3StorageLensGroupFilterOrMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge">DataAwsccS3StorageLensGroupFilterOrMatchObjectAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_greater_than`<sup>Required</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than`<sup>Required</sup> <a name="days_less_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterOrMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge">DataAwsccS3StorageLensGroupFilterOrMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize">DataAwsccS3StorageLensGroupFilterOrMatchObjectSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_greater_than`<sup>Required</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than`<sup>Required</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterOrMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize">DataAwsccS3StorageLensGroupFilterOrMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterOrOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyTag">match_any_tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList">DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr">DataAwsccS3StorageLensGroupFilterOr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_any_prefix`<sup>Required</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix`<sup>Required</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_tag`<sup>Required</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyTag"></a>

```python
match_any_tag: DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList">DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList</a>

---

##### `match_object_age`<sup>Required</sup> <a name="match_object_age" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectAge"></a>

```python
match_object_age: DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a>

---

##### `match_object_size`<sup>Required</sup> <a name="match_object_size" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectSize"></a>

```python
match_object_size: DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilterOr
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr">DataAwsccS3StorageLensGroupFilterOr</a>

---


### DataAwsccS3StorageLensGroupFilterOutputReference <a name="DataAwsccS3StorageLensGroupFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference">DataAwsccS3StorageLensGroupFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyTag">match_any_tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList">DataAwsccS3StorageLensGroupFilterMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.or">or</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference">DataAwsccS3StorageLensGroupFilterOrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter">DataAwsccS3StorageLensGroupFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.and"></a>

```python
and: DataAwsccS3StorageLensGroupFilterAndOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference">DataAwsccS3StorageLensGroupFilterAndOutputReference</a>

---

##### `match_any_prefix`<sup>Required</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix`<sup>Required</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_tag`<sup>Required</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyTag"></a>

```python
match_any_tag: DataAwsccS3StorageLensGroupFilterMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList">DataAwsccS3StorageLensGroupFilterMatchAnyTagList</a>

---

##### `match_object_age`<sup>Required</sup> <a name="match_object_age" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectAge"></a>

```python
match_object_age: DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference</a>

---

##### `match_object_size`<sup>Required</sup> <a name="match_object_size" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectSize"></a>

```python
match_object_size: DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.or"></a>

```python
or: DataAwsccS3StorageLensGroupFilterOrOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference">DataAwsccS3StorageLensGroupFilterOrOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter">DataAwsccS3StorageLensGroupFilter</a>

---


### DataAwsccS3StorageLensGroupTagsList <a name="DataAwsccS3StorageLensGroupTagsList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3StorageLensGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3StorageLensGroupTagsOutputReference <a name="DataAwsccS3StorageLensGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_storage_lens_group

dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags">DataAwsccS3StorageLensGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3StorageLensGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags">DataAwsccS3StorageLensGroupTags</a>

---



