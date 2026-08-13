# `dataAwsccAppsyncSourceApiAssociation` Submodule <a name="`dataAwsccAppsyncSourceApiAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncSourceApiAssociation <a name="DataAwsccAppsyncSourceApiAssociation" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association awscc_appsync_source_api_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association#id DataAwsccAppsyncSourceApiAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppsyncSourceApiAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppsyncSourceApiAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncSourceApiAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationArn">association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lastSuccessfulMergeDate">last_successful_merge_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiArn">merged_api_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiId">merged_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiIdentifier">merged_api_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiArn">source_api_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationConfig">source_api_association_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatus">source_api_association_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail">source_api_association_status_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiId">source_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiIdentifier">source_api_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `association_arn`<sup>Required</sup> <a name="association_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationArn"></a>

```python
association_arn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_successful_merge_date`<sup>Required</sup> <a name="last_successful_merge_date" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lastSuccessfulMergeDate"></a>

```python
last_successful_merge_date: str
```

- *Type:* str

---

##### `merged_api_arn`<sup>Required</sup> <a name="merged_api_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiArn"></a>

```python
merged_api_arn: str
```

- *Type:* str

---

##### `merged_api_id`<sup>Required</sup> <a name="merged_api_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiId"></a>

```python
merged_api_id: str
```

- *Type:* str

---

##### `merged_api_identifier`<sup>Required</sup> <a name="merged_api_identifier" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiIdentifier"></a>

```python
merged_api_identifier: str
```

- *Type:* str

---

##### `source_api_arn`<sup>Required</sup> <a name="source_api_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiArn"></a>

```python
source_api_arn: str
```

- *Type:* str

---

##### `source_api_association_config`<sup>Required</sup> <a name="source_api_association_config" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationConfig"></a>

```python
source_api_association_config: DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a>

---

##### `source_api_association_status`<sup>Required</sup> <a name="source_api_association_status" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatus"></a>

```python
source_api_association_status: str
```

- *Type:* str

---

##### `source_api_association_status_detail`<sup>Required</sup> <a name="source_api_association_status_detail" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail"></a>

```python
source_api_association_status_detail: str
```

- *Type:* str

---

##### `source_api_id`<sup>Required</sup> <a name="source_api_id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiId"></a>

```python
source_api_id: str
```

- *Type:* str

---

##### `source_api_identifier`<sup>Required</sup> <a name="source_api_identifier" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiIdentifier"></a>

```python
source_api_identifier: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncSourceApiAssociationConfig <a name="DataAwsccAppsyncSourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association#id DataAwsccAppsyncSourceApiAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig <a name="DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference <a name="DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_source_api_association

dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType">merge_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merge_type`<sup>Required</sup> <a name="merge_type" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType"></a>

```python
merge_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---



