# `dataAwsccDmsEndpoint` Submodule <a name="`dataAwsccDmsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsEndpoint <a name="DataAwsccDmsEndpoint" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dms_endpoint#id DataAwsccDmsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDmsEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings">doc_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings">dynamo_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings">elasticsearch_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn">endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier">endpoint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName">engine_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes">extra_connection_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings">gcp_my_sql_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings">ibm_db2_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings">kafka_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings">kinesis_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings">microsoft_sql_server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings">mongo_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings">my_sql_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings">neptune_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings">oracle_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings">postgre_sql_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings">redis_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings">redshift_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings">s3_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings">sybase_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `doc_db_settings`<sup>Required</sup> <a name="doc_db_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings"></a>

```python
doc_db_settings: DataAwsccDmsEndpointDocDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a>

---

##### `dynamo_db_settings`<sup>Required</sup> <a name="dynamo_db_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings"></a>

```python
dynamo_db_settings: DataAwsccDmsEndpointDynamoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `elasticsearch_settings`<sup>Required</sup> <a name="elasticsearch_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings"></a>

```python
elasticsearch_settings: DataAwsccDmsEndpointElasticsearchSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpoint_arn`<sup>Required</sup> <a name="endpoint_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn"></a>

```python
endpoint_arn: str
```

- *Type:* str

---

##### `endpoint_identifier`<sup>Required</sup> <a name="endpoint_identifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier"></a>

```python
endpoint_identifier: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName"></a>

```python
engine_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `extra_connection_attributes`<sup>Required</sup> <a name="extra_connection_attributes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes"></a>

```python
extra_connection_attributes: str
```

- *Type:* str

---

##### `gcp_my_sql_settings`<sup>Required</sup> <a name="gcp_my_sql_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings"></a>

```python
gcp_my_sql_settings: DataAwsccDmsEndpointGcpMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `ibm_db2_settings`<sup>Required</sup> <a name="ibm_db2_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings"></a>

```python
ibm_db2_settings: DataAwsccDmsEndpointIbmDb2SettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `kafka_settings`<sup>Required</sup> <a name="kafka_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings"></a>

```python
kafka_settings: DataAwsccDmsEndpointKafkaSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesis_settings`<sup>Required</sup> <a name="kinesis_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings"></a>

```python
kinesis_settings: DataAwsccDmsEndpointKinesisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `microsoft_sql_server_settings`<sup>Required</sup> <a name="microsoft_sql_server_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings"></a>

```python
microsoft_sql_server_settings: DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `mongo_db_settings`<sup>Required</sup> <a name="mongo_db_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings"></a>

```python
mongo_db_settings: DataAwsccDmsEndpointMongoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a>

---

##### `my_sql_settings`<sup>Required</sup> <a name="my_sql_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings"></a>

```python
my_sql_settings: DataAwsccDmsEndpointMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a>

---

##### `neptune_settings`<sup>Required</sup> <a name="neptune_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings"></a>

```python
neptune_settings: DataAwsccDmsEndpointNeptuneSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a>

---

##### `oracle_settings`<sup>Required</sup> <a name="oracle_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings"></a>

```python
oracle_settings: DataAwsccDmsEndpointOracleSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `postgre_sql_settings`<sup>Required</sup> <a name="postgre_sql_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings"></a>

```python
postgre_sql_settings: DataAwsccDmsEndpointPostgreSqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `redis_settings`<sup>Required</sup> <a name="redis_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings"></a>

```python
redis_settings: DataAwsccDmsEndpointRedisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a>

---

##### `redshift_settings`<sup>Required</sup> <a name="redshift_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings"></a>

```python
redshift_settings: DataAwsccDmsEndpointRedshiftSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a>

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `s3_settings`<sup>Required</sup> <a name="s3_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings"></a>

```python
s3_settings: DataAwsccDmsEndpointS3SettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a>

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `sybase_settings`<sup>Required</sup> <a name="sybase_settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings"></a>

```python
sybase_settings: DataAwsccDmsEndpointSybaseSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags"></a>

```python
tags: DataAwsccDmsEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsEndpointConfig <a name="DataAwsccDmsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dms_endpoint#id DataAwsccDmsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsEndpointDocDbSettings <a name="DataAwsccDmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings()
```


### DataAwsccDmsEndpointDynamoDbSettings <a name="DataAwsccDmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings()
```


### DataAwsccDmsEndpointElasticsearchSettings <a name="DataAwsccDmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings()
```


### DataAwsccDmsEndpointGcpMySqlSettings <a name="DataAwsccDmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings()
```


### DataAwsccDmsEndpointIbmDb2Settings <a name="DataAwsccDmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings()
```


### DataAwsccDmsEndpointKafkaSettings <a name="DataAwsccDmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings()
```


### DataAwsccDmsEndpointKinesisSettings <a name="DataAwsccDmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings()
```


### DataAwsccDmsEndpointMicrosoftSqlServerSettings <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings()
```


### DataAwsccDmsEndpointMongoDbSettings <a name="DataAwsccDmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings()
```


### DataAwsccDmsEndpointMySqlSettings <a name="DataAwsccDmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings()
```


### DataAwsccDmsEndpointNeptuneSettings <a name="DataAwsccDmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings()
```


### DataAwsccDmsEndpointOracleSettings <a name="DataAwsccDmsEndpointOracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings()
```


### DataAwsccDmsEndpointPostgreSqlSettings <a name="DataAwsccDmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings()
```


### DataAwsccDmsEndpointRedisSettings <a name="DataAwsccDmsEndpointRedisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings()
```


### DataAwsccDmsEndpointRedshiftSettings <a name="DataAwsccDmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings()
```


### DataAwsccDmsEndpointS3Settings <a name="DataAwsccDmsEndpointS3Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings()
```


### DataAwsccDmsEndpointSybaseSettings <a name="DataAwsccDmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings()
```


### DataAwsccDmsEndpointTags <a name="DataAwsccDmsEndpointTags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsEndpointDocDbSettingsOutputReference <a name="DataAwsccDmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">docs_to_investigate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId">extract_doc_id</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel">nesting_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `docs_to_investigate`<sup>Required</sup> <a name="docs_to_investigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```python
docs_to_investigate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extract_doc_id`<sup>Required</sup> <a name="extract_doc_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```python
extract_doc_id: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `nesting_level`<sup>Required</sup> <a name="nesting_level" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```python
nesting_level: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointDocDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a>

---


### DataAwsccDmsEndpointDynamoDbSettingsOutputReference <a name="DataAwsccDmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointDynamoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a>

---


### DataAwsccDmsEndpointElasticsearchSettingsOutputReference <a name="DataAwsccDmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">error_retry_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">full_load_error_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `error_retry_duration`<sup>Required</sup> <a name="error_retry_duration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```python
error_retry_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `full_load_error_percentage`<sup>Required</sup> <a name="full_load_error_percentage" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```python
full_load_error_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointElasticsearchSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a>

---


### DataAwsccDmsEndpointGcpMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">after_connect_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">clean_source_metadata_on_mismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">events_poll_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">parallel_load_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">server_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_connect_script`<sup>Required</sup> <a name="after_connect_script" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```python
after_connect_script: str
```

- *Type:* str

---

##### `clean_source_metadata_on_mismatch`<sup>Required</sup> <a name="clean_source_metadata_on_mismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```python
clean_source_metadata_on_mismatch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `events_poll_interval`<sup>Required</sup> <a name="events_poll_interval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```python
events_poll_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parallel_load_threads`<sup>Required</sup> <a name="parallel_load_threads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```python
parallel_load_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `server_timezone`<sup>Required</sup> <a name="server_timezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```python
server_timezone: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointGcpMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a>

---


### DataAwsccDmsEndpointIbmDb2SettingsOutputReference <a name="DataAwsccDmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">current_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">keep_csv_files</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">load_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">max_k_bytes_per_read</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">set_data_capture_changes</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">write_buffer_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_lsn`<sup>Required</sup> <a name="current_lsn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```python
current_lsn: str
```

- *Type:* str

---

##### `keep_csv_files`<sup>Required</sup> <a name="keep_csv_files" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```python
keep_csv_files: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `load_timeout`<sup>Required</sup> <a name="load_timeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```python
load_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_k_bytes_per_read`<sup>Required</sup> <a name="max_k_bytes_per_read" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```python
max_k_bytes_per_read: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `set_data_capture_changes`<sup>Required</sup> <a name="set_data_capture_changes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```python
set_data_capture_changes: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `write_buffer_size`<sup>Required</sup> <a name="write_buffer_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```python
write_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointIbmDb2Settings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a>

---


### DataAwsccDmsEndpointKafkaSettingsOutputReference <a name="DataAwsccDmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">include_control_details</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">include_null_and_empty</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">include_partition_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">include_table_alter_operations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">include_transaction_details</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat">message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">message_max_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">no_hex_prefix</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partition_include_schema_table</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword">sasl_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName">sasl_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol">security_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">ssl_ca_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">ssl_client_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">ssl_client_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">ssl_client_key_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```python
broker: str
```

- *Type:* str

---

##### `include_control_details`<sup>Required</sup> <a name="include_control_details" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```python
include_control_details: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_null_and_empty`<sup>Required</sup> <a name="include_null_and_empty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```python
include_null_and_empty: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_partition_value`<sup>Required</sup> <a name="include_partition_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```python
include_partition_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_table_alter_operations`<sup>Required</sup> <a name="include_table_alter_operations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```python
include_table_alter_operations: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_transaction_details`<sup>Required</sup> <a name="include_transaction_details" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```python
include_transaction_details: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `message_format`<sup>Required</sup> <a name="message_format" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

---

##### `message_max_bytes`<sup>Required</sup> <a name="message_max_bytes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```python
message_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_hex_prefix`<sup>Required</sup> <a name="no_hex_prefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```python
no_hex_prefix: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `partition_include_schema_table`<sup>Required</sup> <a name="partition_include_schema_table" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```python
partition_include_schema_table: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sasl_password`<sup>Required</sup> <a name="sasl_password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```python
sasl_password: str
```

- *Type:* str

---

##### `sasl_user_name`<sup>Required</sup> <a name="sasl_user_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```python
sasl_user_name: str
```

- *Type:* str

---

##### `security_protocol`<sup>Required</sup> <a name="security_protocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

---

##### `ssl_ca_certificate_arn`<sup>Required</sup> <a name="ssl_ca_certificate_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```python
ssl_ca_certificate_arn: str
```

- *Type:* str

---

##### `ssl_client_certificate_arn`<sup>Required</sup> <a name="ssl_client_certificate_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```python
ssl_client_certificate_arn: str
```

- *Type:* str

---

##### `ssl_client_key_arn`<sup>Required</sup> <a name="ssl_client_key_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```python
ssl_client_key_arn: str
```

- *Type:* str

---

##### `ssl_client_key_password`<sup>Required</sup> <a name="ssl_client_key_password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```python
ssl_client_key_password: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointKafkaSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a>

---


### DataAwsccDmsEndpointKinesisSettingsOutputReference <a name="DataAwsccDmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">include_control_details</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">include_null_and_empty</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">include_partition_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">include_table_alter_operations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">include_transaction_details</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat">message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">no_hex_prefix</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partition_include_schema_table</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_control_details`<sup>Required</sup> <a name="include_control_details" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```python
include_control_details: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_null_and_empty`<sup>Required</sup> <a name="include_null_and_empty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```python
include_null_and_empty: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_partition_value`<sup>Required</sup> <a name="include_partition_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```python
include_partition_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_table_alter_operations`<sup>Required</sup> <a name="include_table_alter_operations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```python
include_table_alter_operations: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_transaction_details`<sup>Required</sup> <a name="include_transaction_details" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```python
include_transaction_details: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `message_format`<sup>Required</sup> <a name="message_format" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

---

##### `no_hex_prefix`<sup>Required</sup> <a name="no_hex_prefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```python
no_hex_prefix: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `partition_include_schema_table`<sup>Required</sup> <a name="partition_include_schema_table" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```python
partition_include_schema_table: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointKinesisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a>

---


### DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">bcp_packet_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">control_tables_file_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">force_lob_lookup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">query_single_always_on_node</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">read_backup_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">safeguard_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">tlog_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">trim_space_in_char</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">use_bcp_full_load</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">use_third_party_backup_device</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bcp_packet_size`<sup>Required</sup> <a name="bcp_packet_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```python
bcp_packet_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `control_tables_file_group`<sup>Required</sup> <a name="control_tables_file_group" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```python
control_tables_file_group: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `force_lob_lookup`<sup>Required</sup> <a name="force_lob_lookup" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```python
force_lob_lookup: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_single_always_on_node`<sup>Required</sup> <a name="query_single_always_on_node" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```python
query_single_always_on_node: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `read_backup_only`<sup>Required</sup> <a name="read_backup_only" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```python
read_backup_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `safeguard_policy`<sup>Required</sup> <a name="safeguard_policy" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```python
safeguard_policy: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `tlog_access_mode`<sup>Required</sup> <a name="tlog_access_mode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```python
tlog_access_mode: str
```

- *Type:* str

---

##### `trim_space_in_char`<sup>Required</sup> <a name="trim_space_in_char" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```python
trim_space_in_char: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_bcp_full_load`<sup>Required</sup> <a name="use_bcp_full_load" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```python
use_bcp_full_load: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `use_third_party_backup_device`<sup>Required</sup> <a name="use_third_party_backup_device" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```python
use_third_party_backup_device: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointMicrosoftSqlServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a>

---


### DataAwsccDmsEndpointMongoDbSettingsOutputReference <a name="DataAwsccDmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism">auth_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource">auth_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">docs_to_investigate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId">extract_doc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">nesting_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_mechanism`<sup>Required</sup> <a name="auth_mechanism" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```python
auth_mechanism: str
```

- *Type:* str

---

##### `auth_source`<sup>Required</sup> <a name="auth_source" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```python
auth_source: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `docs_to_investigate`<sup>Required</sup> <a name="docs_to_investigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```python
docs_to_investigate: str
```

- *Type:* str

---

##### `extract_doc_id`<sup>Required</sup> <a name="extract_doc_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```python
extract_doc_id: str
```

- *Type:* str

---

##### `nesting_level`<sup>Required</sup> <a name="nesting_level" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```python
nesting_level: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointMongoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a>

---


### DataAwsccDmsEndpointMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">after_connect_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">clean_source_metadata_on_mismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">events_poll_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">parallel_load_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone">server_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType">target_db_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_connect_script`<sup>Required</sup> <a name="after_connect_script" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```python
after_connect_script: str
```

- *Type:* str

---

##### `clean_source_metadata_on_mismatch`<sup>Required</sup> <a name="clean_source_metadata_on_mismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```python
clean_source_metadata_on_mismatch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `events_poll_interval`<sup>Required</sup> <a name="events_poll_interval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```python
events_poll_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parallel_load_threads`<sup>Required</sup> <a name="parallel_load_threads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```python
parallel_load_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `server_timezone`<sup>Required</sup> <a name="server_timezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```python
server_timezone: str
```

- *Type:* str

---

##### `target_db_type`<sup>Required</sup> <a name="target_db_type" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```python
target_db_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a>

---


### DataAwsccDmsEndpointNeptuneSettingsOutputReference <a name="DataAwsccDmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">error_retry_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">iam_auth_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">max_retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">s3_bucket_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_retry_duration`<sup>Required</sup> <a name="error_retry_duration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```python
error_retry_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_auth_enabled`<sup>Required</sup> <a name="iam_auth_enabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```python
iam_auth_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_count`<sup>Required</sup> <a name="max_retry_count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```python
max_retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_bucket_folder`<sup>Required</sup> <a name="s3_bucket_folder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```python
s3_bucket_folder: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointNeptuneSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a>

---


### DataAwsccDmsEndpointOracleSettingsOutputReference <a name="DataAwsccDmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">access_alternate_directly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">additional_archived_log_dest_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">add_supplemental_logging</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">allow_select_nested_tables</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">archived_log_dest_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">archived_logs_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword">asm_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer">asm_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser">asm_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">char_length_semantics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog">direct_path_no_log</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">direct_path_parallel_load</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">enable_homogenous_tablespace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">extra_archived_log_dest_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">fail_tasks_on_lob_truncation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">number_datatype_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">oracle_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">parallel_asm_read_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">read_ahead_blocks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">read_table_space_name</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">replace_path_prefix</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval">retry_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secrets_manager_oracle_asm_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secrets_manager_oracle_asm_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">security_db_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">security_db_encryption_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">spatial_data_option_to_geo_json_function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">standby_delay_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">use_alternate_folder_for_online</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile">use_b_file</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">use_direct_path_full_load</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader">use_logminer_reader</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix">use_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_alternate_directly`<sup>Required</sup> <a name="access_alternate_directly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```python
access_alternate_directly: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `additional_archived_log_dest_id`<sup>Required</sup> <a name="additional_archived_log_dest_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```python
additional_archived_log_dest_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `add_supplemental_logging`<sup>Required</sup> <a name="add_supplemental_logging" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```python
add_supplemental_logging: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `allow_select_nested_tables`<sup>Required</sup> <a name="allow_select_nested_tables" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```python
allow_select_nested_tables: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `archived_log_dest_id`<sup>Required</sup> <a name="archived_log_dest_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```python
archived_log_dest_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archived_logs_only`<sup>Required</sup> <a name="archived_logs_only" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```python
archived_logs_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `asm_password`<sup>Required</sup> <a name="asm_password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```python
asm_password: str
```

- *Type:* str

---

##### `asm_server`<sup>Required</sup> <a name="asm_server" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```python
asm_server: str
```

- *Type:* str

---

##### `asm_user`<sup>Required</sup> <a name="asm_user" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```python
asm_user: str
```

- *Type:* str

---

##### `char_length_semantics`<sup>Required</sup> <a name="char_length_semantics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```python
char_length_semantics: str
```

- *Type:* str

---

##### `direct_path_no_log`<sup>Required</sup> <a name="direct_path_no_log" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```python
direct_path_no_log: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `direct_path_parallel_load`<sup>Required</sup> <a name="direct_path_parallel_load" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```python
direct_path_parallel_load: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_homogenous_tablespace`<sup>Required</sup> <a name="enable_homogenous_tablespace" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```python
enable_homogenous_tablespace: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `extra_archived_log_dest_ids`<sup>Required</sup> <a name="extra_archived_log_dest_ids" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```python
extra_archived_log_dest_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `fail_tasks_on_lob_truncation`<sup>Required</sup> <a name="fail_tasks_on_lob_truncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```python
fail_tasks_on_lob_truncation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `number_datatype_scale`<sup>Required</sup> <a name="number_datatype_scale" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```python
number_datatype_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oracle_path_prefix`<sup>Required</sup> <a name="oracle_path_prefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```python
oracle_path_prefix: str
```

- *Type:* str

---

##### `parallel_asm_read_threads`<sup>Required</sup> <a name="parallel_asm_read_threads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```python
parallel_asm_read_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_ahead_blocks`<sup>Required</sup> <a name="read_ahead_blocks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```python
read_ahead_blocks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_table_space_name`<sup>Required</sup> <a name="read_table_space_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```python
read_table_space_name: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `replace_path_prefix`<sup>Required</sup> <a name="replace_path_prefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```python
replace_path_prefix: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `retry_interval`<sup>Required</sup> <a name="retry_interval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```python
retry_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_access_role_arn`<sup>Required</sup> <a name="secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```python
secrets_manager_oracle_asm_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_secret_id`<sup>Required</sup> <a name="secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```python
secrets_manager_oracle_asm_secret_id: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `security_db_encryption`<sup>Required</sup> <a name="security_db_encryption" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```python
security_db_encryption: str
```

- *Type:* str

---

##### `security_db_encryption_name`<sup>Required</sup> <a name="security_db_encryption_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```python
security_db_encryption_name: str
```

- *Type:* str

---

##### `spatial_data_option_to_geo_json_function_name`<sup>Required</sup> <a name="spatial_data_option_to_geo_json_function_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```python
spatial_data_option_to_geo_json_function_name: str
```

- *Type:* str

---

##### `standby_delay_time`<sup>Required</sup> <a name="standby_delay_time" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```python
standby_delay_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_alternate_folder_for_online`<sup>Required</sup> <a name="use_alternate_folder_for_online" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```python
use_alternate_folder_for_online: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_b_file`<sup>Required</sup> <a name="use_b_file" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```python
use_b_file: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_direct_path_full_load`<sup>Required</sup> <a name="use_direct_path_full_load" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```python
use_direct_path_full_load: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_logminer_reader`<sup>Required</sup> <a name="use_logminer_reader" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```python
use_logminer_reader: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_path_prefix`<sup>Required</sup> <a name="use_path_prefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```python
use_path_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointOracleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a>

---


### DataAwsccDmsEndpointPostgreSqlSettingsOutputReference <a name="DataAwsccDmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">after_connect_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">babelfish_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">capture_ddls</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">database_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">ddl_artifacts_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">execute_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">fail_tasks_on_lob_truncation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">heartbeat_enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">heartbeat_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">heartbeat_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">map_boolean_as_boolean</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName">slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_connect_script`<sup>Required</sup> <a name="after_connect_script" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```python
after_connect_script: str
```

- *Type:* str

---

##### `babelfish_database_name`<sup>Required</sup> <a name="babelfish_database_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```python
babelfish_database_name: str
```

- *Type:* str

---

##### `capture_ddls`<sup>Required</sup> <a name="capture_ddls" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```python
capture_ddls: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `database_mode`<sup>Required</sup> <a name="database_mode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```python
database_mode: str
```

- *Type:* str

---

##### `ddl_artifacts_schema`<sup>Required</sup> <a name="ddl_artifacts_schema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```python
ddl_artifacts_schema: str
```

- *Type:* str

---

##### `execute_timeout`<sup>Required</sup> <a name="execute_timeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```python
execute_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fail_tasks_on_lob_truncation`<sup>Required</sup> <a name="fail_tasks_on_lob_truncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```python
fail_tasks_on_lob_truncation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `heartbeat_enable`<sup>Required</sup> <a name="heartbeat_enable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```python
heartbeat_enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `heartbeat_frequency`<sup>Required</sup> <a name="heartbeat_frequency" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```python
heartbeat_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `heartbeat_schema`<sup>Required</sup> <a name="heartbeat_schema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```python
heartbeat_schema: str
```

- *Type:* str

---

##### `map_boolean_as_boolean`<sup>Required</sup> <a name="map_boolean_as_boolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```python
map_boolean_as_boolean: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `slot_name`<sup>Required</sup> <a name="slot_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```python
slot_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointPostgreSqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a>

---


### DataAwsccDmsEndpointRedisSettingsOutputReference <a name="DataAwsccDmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword">auth_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName">auth_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">ssl_ca_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">ssl_security_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_password`<sup>Required</sup> <a name="auth_password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```python
auth_password: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `auth_user_name`<sup>Required</sup> <a name="auth_user_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```python
auth_user_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_ca_certificate_arn`<sup>Required</sup> <a name="ssl_ca_certificate_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```python
ssl_ca_certificate_arn: str
```

- *Type:* str

---

##### `ssl_security_protocol`<sup>Required</sup> <a name="ssl_security_protocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```python
ssl_security_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointRedisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a>

---


### DataAwsccDmsEndpointRedshiftSettingsOutputReference <a name="DataAwsccDmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">accept_any_date</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">after_connect_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">case_sensitive_names</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate">comp_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">empty_as_null</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds">explicit_ids</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">file_transfer_upload_streams</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">load_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">map_boolean_as_boolean</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">remove_quotes</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars">replace_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">replace_invalid_chars</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">trim_blanks</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">truncate_columns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">write_buffer_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accept_any_date`<sup>Required</sup> <a name="accept_any_date" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```python
accept_any_date: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `after_connect_script`<sup>Required</sup> <a name="after_connect_script" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```python
after_connect_script: str
```

- *Type:* str

---

##### `bucket_folder`<sup>Required</sup> <a name="bucket_folder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `case_sensitive_names`<sup>Required</sup> <a name="case_sensitive_names" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```python
case_sensitive_names: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `comp_update`<sup>Required</sup> <a name="comp_update" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```python
comp_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `connection_timeout`<sup>Required</sup> <a name="connection_timeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_as_null`<sup>Required</sup> <a name="empty_as_null" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```python
empty_as_null: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `explicit_ids`<sup>Required</sup> <a name="explicit_ids" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```python
explicit_ids: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `file_transfer_upload_streams`<sup>Required</sup> <a name="file_transfer_upload_streams" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```python
file_transfer_upload_streams: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_timeout`<sup>Required</sup> <a name="load_timeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```python
load_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `map_boolean_as_boolean`<sup>Required</sup> <a name="map_boolean_as_boolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```python
map_boolean_as_boolean: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remove_quotes`<sup>Required</sup> <a name="remove_quotes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```python
remove_quotes: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `replace_chars`<sup>Required</sup> <a name="replace_chars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```python
replace_chars: str
```

- *Type:* str

---

##### `replace_invalid_chars`<sup>Required</sup> <a name="replace_invalid_chars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```python
replace_invalid_chars: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `server_side_encryption_kms_key_id`<sup>Required</sup> <a name="server_side_encryption_kms_key_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `trim_blanks`<sup>Required</sup> <a name="trim_blanks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```python
trim_blanks: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `truncate_columns`<sup>Required</sup> <a name="truncate_columns" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```python
truncate_columns: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `write_buffer_size`<sup>Required</sup> <a name="write_buffer_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```python
write_buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointRedshiftSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a>

---


### DataAwsccDmsEndpointS3SettingsOutputReference <a name="DataAwsccDmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName">add_column_name</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">add_trailing_padding_character</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">canned_acl_for_objects</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">cdc_inserts_and_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">cdc_inserts_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">cdc_max_batch_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">cdc_min_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath">cdc_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter">csv_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue">csv_no_sup_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue">csv_null_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">csv_row_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize">data_page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">date_partition_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">date_partition_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence">date_partition_sequence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">date_partition_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">dict_page_size_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics">enable_statistics</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType">encoding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition">external_table_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">glue_catalog_generation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">ignore_header_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">include_op_for_full_load</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">parquet_timestamp_in_millisecond</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion">parquet_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions">preserve_transactions</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180">rfc4180</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength">row_group_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName">timestamp_column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">use_csv_no_sup_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">use_task_start_time_for_full_load_timestamp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_column_name`<sup>Required</sup> <a name="add_column_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```python
add_column_name: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `add_trailing_padding_character`<sup>Required</sup> <a name="add_trailing_padding_character" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```python
add_trailing_padding_character: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `bucket_folder`<sup>Required</sup> <a name="bucket_folder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `canned_acl_for_objects`<sup>Required</sup> <a name="canned_acl_for_objects" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```python
canned_acl_for_objects: str
```

- *Type:* str

---

##### `cdc_inserts_and_updates`<sup>Required</sup> <a name="cdc_inserts_and_updates" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```python
cdc_inserts_and_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cdc_inserts_only`<sup>Required</sup> <a name="cdc_inserts_only" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```python
cdc_inserts_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cdc_max_batch_interval`<sup>Required</sup> <a name="cdc_max_batch_interval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```python
cdc_max_batch_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_min_file_size`<sup>Required</sup> <a name="cdc_min_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```python
cdc_min_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_path`<sup>Required</sup> <a name="cdc_path" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```python
cdc_path: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `csv_delimiter`<sup>Required</sup> <a name="csv_delimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```python
csv_delimiter: str
```

- *Type:* str

---

##### `csv_no_sup_value`<sup>Required</sup> <a name="csv_no_sup_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```python
csv_no_sup_value: str
```

- *Type:* str

---

##### `csv_null_value`<sup>Required</sup> <a name="csv_null_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```python
csv_null_value: str
```

- *Type:* str

---

##### `csv_row_delimiter`<sup>Required</sup> <a name="csv_row_delimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```python
csv_row_delimiter: str
```

- *Type:* str

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `data_page_size`<sup>Required</sup> <a name="data_page_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```python
data_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_partition_delimiter`<sup>Required</sup> <a name="date_partition_delimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```python
date_partition_delimiter: str
```

- *Type:* str

---

##### `date_partition_enabled`<sup>Required</sup> <a name="date_partition_enabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```python
date_partition_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `date_partition_sequence`<sup>Required</sup> <a name="date_partition_sequence" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```python
date_partition_sequence: str
```

- *Type:* str

---

##### `date_partition_timezone`<sup>Required</sup> <a name="date_partition_timezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```python
date_partition_timezone: str
```

- *Type:* str

---

##### `dict_page_size_limit`<sup>Required</sup> <a name="dict_page_size_limit" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```python
dict_page_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_statistics`<sup>Required</sup> <a name="enable_statistics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```python
enable_statistics: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encoding_type`<sup>Required</sup> <a name="encoding_type" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `external_table_definition`<sup>Required</sup> <a name="external_table_definition" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```python
external_table_definition: str
```

- *Type:* str

---

##### `glue_catalog_generation`<sup>Required</sup> <a name="glue_catalog_generation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```python
glue_catalog_generation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ignore_header_rows`<sup>Required</sup> <a name="ignore_header_rows" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```python
ignore_header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_op_for_full_load`<sup>Required</sup> <a name="include_op_for_full_load" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```python
include_op_for_full_load: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parquet_timestamp_in_millisecond`<sup>Required</sup> <a name="parquet_timestamp_in_millisecond" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```python
parquet_timestamp_in_millisecond: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `parquet_version`<sup>Required</sup> <a name="parquet_version" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```python
parquet_version: str
```

- *Type:* str

---

##### `preserve_transactions`<sup>Required</sup> <a name="preserve_transactions" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```python
preserve_transactions: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```python
rfc4180: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `row_group_length`<sup>Required</sup> <a name="row_group_length" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```python
row_group_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_side_encryption_kms_key_id`<sup>Required</sup> <a name="server_side_encryption_kms_key_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `timestamp_column_name`<sup>Required</sup> <a name="timestamp_column_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```python
timestamp_column_name: str
```

- *Type:* str

---

##### `use_csv_no_sup_value`<sup>Required</sup> <a name="use_csv_no_sup_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```python
use_csv_no_sup_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_task_start_time_for_full_load_timestamp`<sup>Required</sup> <a name="use_task_start_time_for_full_load_timestamp" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```python
use_task_start_time_for_full_load_timestamp: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointS3Settings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a>

---


### DataAwsccDmsEndpointSybaseSettingsOutputReference <a name="DataAwsccDmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointSybaseSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a>

---


### DataAwsccDmsEndpointTagsList <a name="DataAwsccDmsEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDmsEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDmsEndpointTagsOutputReference <a name="DataAwsccDmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_endpoint

dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a>

---



