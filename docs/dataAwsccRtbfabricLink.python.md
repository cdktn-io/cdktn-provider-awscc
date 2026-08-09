# `dataAwsccRtbfabricLink` Submodule <a name="`dataAwsccRtbfabricLink` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricLink <a name="DataAwsccRtbfabricLink" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link awscc_rtbfabric_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link#id DataAwsccRtbfabricLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRtbfabricLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRtbfabricLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRtbfabricLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.httpResponderAllowed">http_responder_allowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference">DataAwsccRtbfabricLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkDirection">link_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkStatus">link_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.moduleConfigurationList">module_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList">DataAwsccRtbfabricLinkModuleConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.peerGatewayId">peer_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList">DataAwsccRtbfabricLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `http_responder_allowed`<sup>Required</sup> <a name="http_responder_allowed" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.httpResponderAllowed"></a>

```python
http_responder_allowed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `link_attributes`<sup>Required</sup> <a name="link_attributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkAttributes"></a>

```python
link_attributes: DataAwsccRtbfabricLinkLinkAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference">DataAwsccRtbfabricLinkLinkAttributesOutputReference</a>

---

##### `link_direction`<sup>Required</sup> <a name="link_direction" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkDirection"></a>

```python
link_direction: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkLogSettings"></a>

```python
link_log_settings: DataAwsccRtbfabricLinkLinkLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsOutputReference</a>

---

##### `link_status`<sup>Required</sup> <a name="link_status" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.linkStatus"></a>

```python
link_status: str
```

- *Type:* str

---

##### `module_configuration_list`<sup>Required</sup> <a name="module_configuration_list" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.moduleConfigurationList"></a>

```python
module_configuration_list: DataAwsccRtbfabricLinkModuleConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList">DataAwsccRtbfabricLinkModuleConfigurationListStructList</a>

---

##### `peer_gateway_id`<sup>Required</sup> <a name="peer_gateway_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.peerGatewayId"></a>

```python
peer_gateway_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tags"></a>

```python
tags: DataAwsccRtbfabricLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList">DataAwsccRtbfabricLinkTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricLinkConfig <a name="DataAwsccRtbfabricLinkConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rtbfabric_link#id DataAwsccRtbfabricLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricLinkLinkAttributes <a name="DataAwsccRtbfabricLinkLinkAttributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes()
```


### DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking <a name="DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking()
```


### DataAwsccRtbfabricLinkLinkLogSettings <a name="DataAwsccRtbfabricLinkLinkLogSettings" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings()
```


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs()
```


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration()
```


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria()
```


### DataAwsccRtbfabricLinkModuleConfigurationListStruct <a name="DataAwsccRtbfabricLinkModuleConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct()
```


### DataAwsccRtbfabricLinkTags <a name="DataAwsccRtbfabricLinkTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricLinkLinkAttributesOutputReference <a name="DataAwsccRtbfabricLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId">customer_provided_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking">responder_error_masking</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes">DataAwsccRtbfabricLinkLinkAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_provided_id`<sup>Required</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```python
customer_provided_id: str
```

- *Type:* str

---

##### `responder_error_masking`<sup>Required</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```python
responder_error_masking: DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkLinkAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributes">DataAwsccRtbfabricLinkLinkAttributes</a>

---


### DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList <a name="DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference <a name="DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">http_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">logging_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">response_logging_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `http_code`<sup>Required</sup> <a name="http_code" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

---

##### `logging_types`<sup>Required</sup> <a name="logging_types" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```python
logging_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_logging_percentage`<sup>Required</sup> <a name="response_logging_percentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```python
response_logging_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking</a>

---


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">error_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filter_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```python
error_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```python
filter_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference <a name="DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">link_application_log_sampling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```python
link_application_log_sampling: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs</a>

---


### DataAwsccRtbfabricLinkLinkLogSettingsOutputReference <a name="DataAwsccRtbfabricLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings">DataAwsccRtbfabricLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```python
application_logs: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkLinkLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkLinkLogSettings">DataAwsccRtbfabricLinkLinkLogSettings</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage">pass_through_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode">reason_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pass_through_percentage`<sup>Required</sup> <a name="pass_through_percentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage"></a>

```python
pass_through_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `reason_code`<sup>Required</sup> <a name="reason_code" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode"></a>

```python
reason_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode">no_bid_reason_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_bid_reason_code`<sup>Required</sup> <a name="no_bid_reason_code" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode"></a>

```python
no_bid_reason_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag">header_tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid">no_bid</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_tag`<sup>Required</sup> <a name="header_tag" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag"></a>

```python
header_tag: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a>

---

##### `no_bid`<sup>Required</sup> <a name="no_bid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid"></a>

```python
no_bid: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria"></a>

```python
criteria: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage">holdback_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action"></a>

```python
action: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a>

---

##### `filter_configuration`<sup>Required</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration"></a>

```python
filter_configuration: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a>

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `holdback_percentage`<sup>Required</sup> <a name="holdback_percentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage"></a>

```python
holdback_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid">no_bid</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute">open_rtb_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters">DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_bid`<sup>Required</sup> <a name="no_bid" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid"></a>

```python
no_bid: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a>

---

##### `open_rtb_attribute`<sup>Required</sup> <a name="open_rtb_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute"></a>

```python
open_rtb_attribute: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters">DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters</a>

---


### DataAwsccRtbfabricLinkModuleConfigurationListStructList <a name="DataAwsccRtbfabricLinkModuleConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference <a name="DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters">module_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct">DataAwsccRtbfabricLinkModuleConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `module_parameters`<sup>Required</sup> <a name="module_parameters" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters"></a>

```python
module_parameters: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference">DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkModuleConfigurationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkModuleConfigurationListStruct">DataAwsccRtbfabricLinkModuleConfigurationListStruct</a>

---


### DataAwsccRtbfabricLinkTagsList <a name="DataAwsccRtbfabricLinkTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricLinkTagsOutputReference <a name="DataAwsccRtbfabricLinkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_link

dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags">DataAwsccRtbfabricLinkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricLinkTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricLink.DataAwsccRtbfabricLinkTags">DataAwsccRtbfabricLinkTags</a>

---



