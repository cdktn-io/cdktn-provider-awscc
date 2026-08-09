# `dataAwsccS3OutpostsBucket` Submodule <a name="`dataAwsccS3OutpostsBucket` Submodule" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3OutpostsBucket <a name="DataAwsccS3OutpostsBucket" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_bucket awscc_s3outposts_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_bucket#id DataAwsccS3OutpostsBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccS3OutpostsBucket resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccS3OutpostsBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccS3OutpostsBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccS3OutpostsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3OutpostsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.outpostId">outpost_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList">DataAwsccS3OutpostsBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `lifecycle_configuration`<sup>Required</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference</a>

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.outpostId"></a>

```python
outpost_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tags"></a>

```python
tags: DataAwsccS3OutpostsBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList">DataAwsccS3OutpostsBucketTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3OutpostsBucketConfig <a name="DataAwsccS3OutpostsBucketConfig" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_bucket#id DataAwsccS3OutpostsBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3OutpostsBucketLifecycleConfiguration <a name="DataAwsccS3OutpostsBucketLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration()
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRules <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules()
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload()
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter()
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator()
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags()
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag()
```


### DataAwsccS3OutpostsBucketTags <a name="DataAwsccS3OutpostsBucketTags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration">DataAwsccS3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.rules"></a>

```python
rules: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration">DataAwsccS3OutpostsBucketLifecycleConfiguration</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">days_after_initiation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_after_initiation`<sup>Required</sup> <a name="days_after_initiation" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```python
days_after_initiation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags"></a>

```python
tags: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator">and_operator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and_operator`<sup>Required</sup> <a name="and_operator" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator"></a>

```python
and_operator: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag"></a>

```python
tag: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abort_incomplete_multipart_upload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expiration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules">DataAwsccS3OutpostsBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_incomplete_multipart_upload`<sup>Required</sup> <a name="abort_incomplete_multipart_upload" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```python
abort_incomplete_multipart_upload: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `expiration_in_days`<sup>Required</sup> <a name="expiration_in_days" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```python
expiration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter"></a>

```python
filter: DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketLifecycleConfigurationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules">DataAwsccS3OutpostsBucketLifecycleConfigurationRules</a>

---


### DataAwsccS3OutpostsBucketTagsList <a name="DataAwsccS3OutpostsBucketTagsList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3OutpostsBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3OutpostsBucketTagsOutputReference <a name="DataAwsccS3OutpostsBucketTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_bucket

dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags">DataAwsccS3OutpostsBucketTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsBucketTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags">DataAwsccS3OutpostsBucketTags</a>

---



