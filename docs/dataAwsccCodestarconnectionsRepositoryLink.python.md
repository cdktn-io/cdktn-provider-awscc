# `dataAwsccCodestarconnectionsRepositoryLink` Submodule <a name="`dataAwsccCodestarconnectionsRepositoryLink` Submodule" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodestarconnectionsRepositoryLink <a name="DataAwsccCodestarconnectionsRepositoryLink" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codestarconnections_repository_link awscc_codestarconnections_repository_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codestarconnections_repository_link#id DataAwsccCodestarconnectionsRepositoryLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCodestarconnectionsRepositoryLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCodestarconnectionsRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codestarconnections_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodestarconnectionsRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkArn">repository_link_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkId">repository_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList">DataAwsccCodestarconnectionsRepositoryLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `repository_link_arn`<sup>Required</sup> <a name="repository_link_arn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkArn"></a>

```python
repository_link_arn: str
```

- *Type:* str

---

##### `repository_link_id`<sup>Required</sup> <a name="repository_link_id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkId"></a>

```python
repository_link_id: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tags"></a>

```python
tags: DataAwsccCodestarconnectionsRepositoryLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList">DataAwsccCodestarconnectionsRepositoryLinkTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodestarconnectionsRepositoryLinkConfig <a name="DataAwsccCodestarconnectionsRepositoryLinkConfig" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codestarconnections_repository_link#id DataAwsccCodestarconnectionsRepositoryLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodestarconnectionsRepositoryLinkTags <a name="DataAwsccCodestarconnectionsRepositoryLinkTags" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodestarconnectionsRepositoryLinkTagsList <a name="DataAwsccCodestarconnectionsRepositoryLinkTagsList" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference <a name="DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codestarconnections_repository_link

dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags">DataAwsccCodestarconnectionsRepositoryLinkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodestarconnectionsRepositoryLinkTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags">DataAwsccCodestarconnectionsRepositoryLinkTags</a>

---



