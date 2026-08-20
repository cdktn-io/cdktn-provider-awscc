# `dataAwsccGrafanaWorkspace` Submodule <a name="`dataAwsccGrafanaWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGrafanaWorkspace <a name="DataAwsccGrafanaWorkspace" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/grafana_workspace awscc_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/grafana_workspace#id DataAwsccGrafanaWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGrafanaWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType">account_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders">authentication_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources">data_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion">grafana_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp">modification_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl">network_access_control</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations">notification_destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName">organization_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType">permission_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled">plugin_admin_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration">saml_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus">saml_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId">sso_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName">stack_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `account_access_type`<sup>Required</sup> <a name="account_access_type" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType"></a>

```python
account_access_type: str
```

- *Type:* str

---

##### `authentication_providers`<sup>Required</sup> <a name="authentication_providers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders"></a>

```python
authentication_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources"></a>

```python
data_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `grafana_version`<sup>Required</sup> <a name="grafana_version" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion"></a>

```python
grafana_version: str
```

- *Type:* str

---

##### `modification_timestamp`<sup>Required</sup> <a name="modification_timestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp"></a>

```python
modification_timestamp: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_access_control`<sup>Required</sup> <a name="network_access_control" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl"></a>

```python
network_access_control: DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `notification_destinations`<sup>Required</sup> <a name="notification_destinations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations"></a>

```python
notification_destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units`<sup>Required</sup> <a name="organizational_units" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_role_name`<sup>Required</sup> <a name="organization_role_name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName"></a>

```python
organization_role_name: str
```

- *Type:* str

---

##### `permission_type`<sup>Required</sup> <a name="permission_type" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

---

##### `plugin_admin_enabled`<sup>Required</sup> <a name="plugin_admin_enabled" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled"></a>

```python
plugin_admin_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `saml_configuration`<sup>Required</sup> <a name="saml_configuration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration"></a>

```python
saml_configuration: DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a>

---

##### `saml_configuration_status`<sup>Required</sup> <a name="saml_configuration_status" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus"></a>

```python
saml_configuration_status: str
```

- *Type:* str

---

##### `sso_client_id`<sup>Required</sup> <a name="sso_client_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId"></a>

```python
sso_client_id: str
```

- *Type:* str

---

##### `stack_set_name`<sup>Required</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName"></a>

```python
stack_set_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags"></a>

```python
tags: DataAwsccGrafanaWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration"></a>

```python
vpc_configuration: DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGrafanaWorkspaceConfig <a name="DataAwsccGrafanaWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/grafana_workspace#id DataAwsccGrafanaWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGrafanaWorkspaceNetworkAccessControl <a name="DataAwsccGrafanaWorkspaceNetworkAccessControl" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl()
```


### DataAwsccGrafanaWorkspaceSamlConfiguration <a name="DataAwsccGrafanaWorkspaceSamlConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration()
```


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes()
```


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata()
```


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues()
```


### DataAwsccGrafanaWorkspaceTags <a name="DataAwsccGrafanaWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags()
```


### DataAwsccGrafanaWorkspaceVpcConfiguration <a name="DataAwsccGrafanaWorkspaceVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference <a name="DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">vpce_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_list_ids`<sup>Required</sup> <a name="prefix_list_ids" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpce_ids`<sup>Required</sup> <a name="vpce_ids" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```python
vpce_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGrafanaWorkspaceNetworkAccessControl
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups">groups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org">org</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups"></a>

```python
groups: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org"></a>

```python
org: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml">xml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml"></a>

```python
xml: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations">allowed_organizations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes">assertion_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata">idp_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration">login_validity_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues">role_values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_organizations`<sup>Required</sup> <a name="allowed_organizations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations"></a>

```python
allowed_organizations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assertion_attributes`<sup>Required</sup> <a name="assertion_attributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes"></a>

```python
assertion_attributes: DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a>

---

##### `idp_metadata`<sup>Required</sup> <a name="idp_metadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata"></a>

```python
idp_metadata: DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a>

---

##### `login_validity_duration`<sup>Required</sup> <a name="login_validity_duration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration"></a>

```python
login_validity_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_values`<sup>Required</sup> <a name="role_values" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues"></a>

```python
role_values: DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGrafanaWorkspaceSamlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin">admin</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor">editor</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin"></a>

```python
admin: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `editor`<sup>Required</sup> <a name="editor" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor"></a>

```python
editor: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a>

---


### DataAwsccGrafanaWorkspaceTagsList <a name="DataAwsccGrafanaWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGrafanaWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGrafanaWorkspaceTagsOutputReference <a name="DataAwsccGrafanaWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGrafanaWorkspaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a>

---


### DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_grafana_workspace

dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGrafanaWorkspaceVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a>

---



