# `dataAwsccMediaconnectSourceEndpoint` Submodule <a name="`dataAwsccMediaconnectSourceEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectSourceEndpoint <a name="DataAwsccMediaconnectSourceEndpoint" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint#id DataAwsccMediaconnectSourceEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectSourceEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectSourceEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectSourceEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.associatedResourceDetails">associated_resource_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.connectionState">connection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycleManagement">lifecycle_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.registrationState">registration_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceEndpointId">source_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList">DataAwsccMediaconnectSourceEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associated_resource_details`<sup>Required</sup> <a name="associated_resource_details" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.associatedResourceDetails"></a>

```python
associated_resource_details: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.configuration"></a>

```python
configuration: DataAwsccMediaconnectSourceEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationOutputReference</a>

---

##### `connection_state`<sup>Required</sup> <a name="connection_state" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `lifecycle_management`<sup>Required</sup> <a name="lifecycle_management" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.lifecycleManagement"></a>

```python
lifecycle_management: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `registration_state`<sup>Required</sup> <a name="registration_state" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.registrationState"></a>

```python
registration_state: str
```

- *Type:* str

---

##### `source_endpoint_id`<sup>Required</sup> <a name="source_endpoint_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceEndpointId"></a>

```python
source_endpoint_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tags"></a>

```python
tags: DataAwsccMediaconnectSourceEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList">DataAwsccMediaconnectSourceEndpointTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails()
```


### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput()
```


### DataAwsccMediaconnectSourceEndpointConfig <a name="DataAwsccMediaconnectSourceEndpointConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_source_endpoint#id DataAwsccMediaconnectSourceEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectSourceEndpointConfiguration <a name="DataAwsccMediaconnectSourceEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration()
```


### DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput <a name="DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandard <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules()
```


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc()
```


### DataAwsccMediaconnectSourceEndpointTags <a name="DataAwsccMediaconnectSourceEndpointTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.routerOutput">router_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.standard">standard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `router_output`<sup>Required</sup> <a name="router_output" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.routerOutput"></a>

```python
router_output: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```python
standard: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetails</a>

---


### DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference <a name="DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.maximumBitrate">maximum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_bitrate`<sup>Required</sup> <a name="maximum_bitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.maximumBitrate"></a>

```python
maximum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput">DataAwsccMediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.routerOutput">router_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration">DataAwsccMediaconnectSourceEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `router_output`<sup>Required</sup> <a name="router_output" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.routerOutput"></a>

```python
router_output: DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.standard"></a>

```python
standard: DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfiguration">DataAwsccMediaconnectSourceEndpointConfiguration</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArn">router_output_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `router_output_arn`<sup>Required</sup> <a name="router_output_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArn"></a>

```python
router_output_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput">DataAwsccMediaconnectSourceEndpointConfigurationRouterOutput</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfiguration">protocol_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfiguration">source_networking_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingType">source_networking_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard">DataAwsccMediaconnectSourceEndpointConfigurationStandard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_configuration`<sup>Required</sup> <a name="protocol_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```python
protocol_configuration: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `source_networking_configuration`<sup>Required</sup> <a name="source_networking_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfiguration"></a>

```python
source_networking_configuration: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference</a>

---

##### `source_networking_type`<sup>Required</sup> <a name="source_networking_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingType"></a>

```python
source_networking_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandard
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandard">DataAwsccMediaconnectSourceEndpointConfigurationStandard</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">srt_caller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">srt_listener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```python
rist: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```python
rtp: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `srt_caller`<sup>Required</sup> <a name="srt_caller" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```python
srt_caller: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `srt_listener`<sup>Required</sup> <a name="srt_listener" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```python
srt_listener: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">destination_ingest_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds">recovery_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_ingest_port`<sup>Required</sup> <a name="destination_ingest_port" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```python
destination_ingest_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_latency_milliseconds`<sup>Required</sup> <a name="recovery_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```python
recovery_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">destination_ingest_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">forward_error_correction_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_ingest_port`<sup>Required</sup> <a name="destination_ingest_port" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```python
destination_ingest_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `forward_error_correction_state`<sup>Required</sup> <a name="forward_error_correction_state" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```python
forward_error_correction_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPort">destination_ingest_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">encryption_passphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">minimum_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_ingest_port`<sup>Required</sup> <a name="destination_ingest_port" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPort"></a>

```python
destination_ingest_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_passphrase`<sup>Required</sup> <a name="encryption_passphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```python
encryption_passphrase: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `minimum_latency_milliseconds`<sup>Required</sup> <a name="minimum_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```python
minimum_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">encryption_passphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">minimum_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPort">source_listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_passphrase`<sup>Required</sup> <a name="encryption_passphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```python
encryption_passphrase: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `minimum_latency_milliseconds`<sup>Required</sup> <a name="minimum_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```python
minimum_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `source_listener_port`<sup>Required</sup> <a name="source_listener_port" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPort"></a>

```python
source_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.public"></a>

```python
public: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpc"></a>

```python
vpc: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRules">source_allow_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_allow_rules`<sup>Required</sup> <a name="source_allow_rules" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRules"></a>

```python
source_allow_rules: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>

---


### DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference <a name="DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">DataAwsccMediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a>

---


### DataAwsccMediaconnectSourceEndpointTagsList <a name="DataAwsccMediaconnectSourceEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectSourceEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectSourceEndpointTagsOutputReference <a name="DataAwsccMediaconnectSourceEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_source_endpoint

dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags">DataAwsccMediaconnectSourceEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectSourceEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectSourceEndpoint.DataAwsccMediaconnectSourceEndpointTags">DataAwsccMediaconnectSourceEndpointTags</a>

---



