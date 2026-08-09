# `dataAwsccS3OutpostsEndpoint` Submodule <a name="`dataAwsccS3OutpostsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3OutpostsEndpoint <a name="DataAwsccS3OutpostsEndpoint" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_endpoint awscc_s3outposts_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_endpoint#id DataAwsccS3OutpostsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccS3OutpostsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccS3OutpostsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccS3OutpostsEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccS3OutpostsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3OutpostsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.failedReason">failed_reason</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference">DataAwsccS3OutpostsEndpointFailedReasonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList">DataAwsccS3OutpostsEndpointNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.outpostId">outpost_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `customer_owned_ipv4_pool`<sup>Required</sup> <a name="customer_owned_ipv4_pool" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `failed_reason`<sup>Required</sup> <a name="failed_reason" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.failedReason"></a>

```python
failed_reason: DataAwsccS3OutpostsEndpointFailedReasonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference">DataAwsccS3OutpostsEndpointFailedReasonOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.networkInterfaces"></a>

```python
network_interfaces: DataAwsccS3OutpostsEndpointNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList">DataAwsccS3OutpostsEndpointNetworkInterfacesList</a>

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.outpostId"></a>

```python
outpost_id: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3OutpostsEndpointConfig <a name="DataAwsccS3OutpostsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_endpoint#id DataAwsccS3OutpostsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3OutpostsEndpointFailedReason <a name="DataAwsccS3OutpostsEndpointFailedReason" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason()
```


### DataAwsccS3OutpostsEndpointNetworkInterfaces <a name="DataAwsccS3OutpostsEndpointNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3OutpostsEndpointFailedReasonOutputReference <a name="DataAwsccS3OutpostsEndpointFailedReasonOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.errorCode">error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason">DataAwsccS3OutpostsEndpointFailedReason</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.errorCode"></a>

```python
error_code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsEndpointFailedReason
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason">DataAwsccS3OutpostsEndpointFailedReason</a>

---


### DataAwsccS3OutpostsEndpointNetworkInterfacesList <a name="DataAwsccS3OutpostsEndpointNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference <a name="DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_s3_outposts_endpoint

dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces">DataAwsccS3OutpostsEndpointNetworkInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccS3OutpostsEndpointNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces">DataAwsccS3OutpostsEndpointNetworkInterfaces</a>

---



