# `dataAwsccLogsScheduledQuery` Submodule <a name="`dataAwsccLogsScheduledQuery` Submodule" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLogsScheduledQuery <a name="DataAwsccLogsScheduledQuery" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/logs_scheduled_query awscc_logs_scheduled_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/logs_scheduled_query#id DataAwsccLogsScheduledQuery#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLogsScheduledQuery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLogsScheduledQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLogsScheduledQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLogsScheduledQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/logs_scheduled_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLogsScheduledQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference">DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lastExecutionStatus">last_execution_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lastTriggeredTime">last_triggered_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lastUpdatedTime">last_updated_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.logGroupIdentifiers">log_group_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.queryLanguage">query_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduledQueryArn">scheduled_query_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduleEndTime">schedule_end_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduleStartTime">schedule_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.startTimeOffset">start_time_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList">DataAwsccLogsScheduledQueryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_configuration`<sup>Required</sup> <a name="destination_configuration" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.destinationConfiguration"></a>

```python
destination_configuration: DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference">DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference</a>

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `last_execution_status`<sup>Required</sup> <a name="last_execution_status" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lastExecutionStatus"></a>

```python
last_execution_status: str
```

- *Type:* str

---

##### `last_triggered_time`<sup>Required</sup> <a name="last_triggered_time" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lastTriggeredTime"></a>

```python
last_triggered_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.lastUpdatedTime"></a>

```python
last_updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_group_identifiers`<sup>Required</sup> <a name="log_group_identifiers" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.logGroupIdentifiers"></a>

```python
log_group_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_language`<sup>Required</sup> <a name="query_language" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.queryLanguage"></a>

```python
query_language: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `scheduled_query_arn`<sup>Required</sup> <a name="scheduled_query_arn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduledQueryArn"></a>

```python
scheduled_query_arn: str
```

- *Type:* str

---

##### `schedule_end_time`<sup>Required</sup> <a name="schedule_end_time" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduleEndTime"></a>

```python
schedule_end_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_start_time`<sup>Required</sup> <a name="schedule_start_time" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.scheduleStartTime"></a>

```python
schedule_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.startTimeOffset"></a>

```python
start_time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.tags"></a>

```python
tags: DataAwsccLogsScheduledQueryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList">DataAwsccLogsScheduledQueryTagsList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLogsScheduledQueryConfig <a name="DataAwsccLogsScheduledQueryConfig" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/logs_scheduled_query#id DataAwsccLogsScheduledQuery#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLogsScheduledQueryDestinationConfiguration <a name="DataAwsccLogsScheduledQueryDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfiguration()
```


### DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration <a name="DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration()
```


### DataAwsccLogsScheduledQueryTags <a name="DataAwsccLogsScheduledQueryTags" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference <a name="DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfiguration">DataAwsccLogsScheduledQueryDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference">DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLogsScheduledQueryDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfiguration">DataAwsccLogsScheduledQueryDestinationConfiguration</a>

---


### DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference <a name="DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier">destination_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration">DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_identifier`<sup>Required</sup> <a name="destination_identifier" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.destinationIdentifier"></a>

```python
destination_identifier: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration">DataAwsccLogsScheduledQueryDestinationConfigurationS3Configuration</a>

---


### DataAwsccLogsScheduledQueryTagsList <a name="DataAwsccLogsScheduledQueryTagsList" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLogsScheduledQueryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLogsScheduledQueryTagsOutputReference <a name="DataAwsccLogsScheduledQueryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_logs_scheduled_query

dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTags">DataAwsccLogsScheduledQueryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLogsScheduledQueryTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLogsScheduledQuery.DataAwsccLogsScheduledQueryTags">DataAwsccLogsScheduledQueryTags</a>

---



