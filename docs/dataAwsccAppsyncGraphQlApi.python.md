# `dataAwsccAppsyncGraphQlApi` Submodule <a name="`dataAwsccAppsyncGraphQlApi` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncGraphQlApi <a name="DataAwsccAppsyncGraphQlApi" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_graph_ql_api awscc_appsync_graph_ql_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_graph_ql_api#id DataAwsccAppsyncGraphQlApi#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncGraphQlApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppsyncGraphQlApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppsyncGraphQlApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppsyncGraphQlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncGraphQlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.additionalAuthenticationProviders">additional_authentication_providers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.enhancedMetricsConfig">enhanced_metrics_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.environmentVariables">environment_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlDns">graph_ql_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlEndpointArn">graph_ql_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlUrl">graph_ql_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.introspectionConfig">introspection_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference">DataAwsccAppsyncGraphQlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.mergedApiExecutionRoleArn">merged_api_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.ownerContact">owner_contact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.queryDepthLimit">query_depth_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeDns">realtime_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeUrl">realtime_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.resolverCountLimit">resolver_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList">DataAwsccAppsyncGraphQlApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.xrayEnabled">xray_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `additional_authentication_providers`<sup>Required</sup> <a name="additional_authentication_providers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.additionalAuthenticationProviders"></a>

```python
additional_authentication_providers: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList</a>

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `enhanced_metrics_config`<sup>Required</sup> <a name="enhanced_metrics_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.enhancedMetricsConfig"></a>

```python
enhanced_metrics_config: DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a>

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `graph_ql_dns`<sup>Required</sup> <a name="graph_ql_dns" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlDns"></a>

```python
graph_ql_dns: str
```

- *Type:* str

---

##### `graph_ql_endpoint_arn`<sup>Required</sup> <a name="graph_ql_endpoint_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlEndpointArn"></a>

```python
graph_ql_endpoint_arn: str
```

- *Type:* str

---

##### `graph_ql_url`<sup>Required</sup> <a name="graph_ql_url" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlUrl"></a>

```python
graph_ql_url: str
```

- *Type:* str

---

##### `introspection_config`<sup>Required</sup> <a name="introspection_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.introspectionConfig"></a>

```python
introspection_config: str
```

- *Type:* str

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.logConfig"></a>

```python
log_config: DataAwsccAppsyncGraphQlApiLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference">DataAwsccAppsyncGraphQlApiLogConfigOutputReference</a>

---

##### `merged_api_execution_role_arn`<sup>Required</sup> <a name="merged_api_execution_role_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.mergedApiExecutionRoleArn"></a>

```python
merged_api_execution_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_id_connect_config`<sup>Required</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.openIdConnectConfig"></a>

```python
open_id_connect_config: DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference</a>

---

##### `owner_contact`<sup>Required</sup> <a name="owner_contact" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.ownerContact"></a>

```python
owner_contact: str
```

- *Type:* str

---

##### `query_depth_limit`<sup>Required</sup> <a name="query_depth_limit" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.queryDepthLimit"></a>

```python
query_depth_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `realtime_dns`<sup>Required</sup> <a name="realtime_dns" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeDns"></a>

```python
realtime_dns: str
```

- *Type:* str

---

##### `realtime_url`<sup>Required</sup> <a name="realtime_url" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeUrl"></a>

```python
realtime_url: str
```

- *Type:* str

---

##### `resolver_count_limit`<sup>Required</sup> <a name="resolver_count_limit" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.resolverCountLimit"></a>

```python
resolver_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tags"></a>

```python
tags: DataAwsccAppsyncGraphQlApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList">DataAwsccAppsyncGraphQlApiTagsList</a>

---

##### `user_pool_config`<sup>Required</sup> <a name="user_pool_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.userPoolConfig"></a>

```python
user_pool_config: DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference</a>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `xray_enabled`<sup>Required</sup> <a name="xray_enabled" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.xrayEnabled"></a>

```python
xray_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders()
```


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig()
```


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig()
```


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig()
```


### DataAwsccAppsyncGraphQlApiConfig <a name="DataAwsccAppsyncGraphQlApiConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_graph_ql_api#id DataAwsccAppsyncGraphQlApi#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig <a name="DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig()
```


### DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig <a name="DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig()
```


### DataAwsccAppsyncGraphQlApiLogConfig <a name="DataAwsccAppsyncGraphQlApiLogConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig()
```


### DataAwsccAppsyncGraphQlApiOpenIdConnectConfig <a name="DataAwsccAppsyncGraphQlApiOpenIdConnectConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig()
```


### DataAwsccAppsyncGraphQlApiTags <a name="DataAwsccAppsyncGraphQlApiTags" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags()
```


### DataAwsccAppsyncGraphQlApiUserPoolConfig <a name="DataAwsccAppsyncGraphQlApiUserPoolConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig">open_id_connect_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `open_id_connect_config`<sup>Required</sup> <a name="open_id_connect_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig"></a>

```python
open_id_connect_config: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a>

---

##### `user_pool_config`<sup>Required</sup> <a name="user_pool_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig"></a>

```python
user_pool_config: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders</a>

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---


### DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">data_source_level_metrics_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">operation_level_metrics_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">resolver_level_metrics_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_level_metrics_behavior`<sup>Required</sup> <a name="data_source_level_metrics_behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```python
data_source_level_metrics_behavior: str
```

- *Type:* str

---

##### `operation_level_metrics_config`<sup>Required</sup> <a name="operation_level_metrics_config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```python
operation_level_metrics_config: str
```

- *Type:* str

---

##### `resolver_level_metrics_behavior`<sup>Required</sup> <a name="resolver_level_metrics_behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```python
resolver_level_metrics_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig</a>

---


### DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig</a>

---


### DataAwsccAppsyncGraphQlApiLogConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiLogConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent">exclude_verbose_content</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel">field_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig">DataAwsccAppsyncGraphQlApiLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

---

##### `exclude_verbose_content`<sup>Required</sup> <a name="exclude_verbose_content" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```python
exclude_verbose_content: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `field_log_level`<sup>Required</sup> <a name="field_log_level" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```python
field_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiLogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig">DataAwsccAppsyncGraphQlApiLogConfig</a>

---


### DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiOpenIdConnectConfig</a>

---


### DataAwsccAppsyncGraphQlApiTagsList <a name="DataAwsccAppsyncGraphQlApiTagsList" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppsyncGraphQlApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppsyncGraphQlApiTagsOutputReference <a name="DataAwsccAppsyncGraphQlApiTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags">DataAwsccAppsyncGraphQlApiTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags">DataAwsccAppsyncGraphQlApiTags</a>

---


### DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_graph_ql_api

dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig">DataAwsccAppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncGraphQlApiUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig">DataAwsccAppsyncGraphQlApiUserPoolConfig</a>

---



