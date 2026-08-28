# `dataAwsccLakeformationPrincipalPermissions` Submodule <a name="`dataAwsccLakeformationPrincipalPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLakeformationPrincipalPermissions <a name="DataAwsccLakeformationPrincipalPermissions" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lakeformation_principal_permissions#id DataAwsccLakeformationPrincipalPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLakeformationPrincipalPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLakeformationPrincipalPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLakeformationPrincipalPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissionsWithGrantOption">permissions_with_grant_option</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference">DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principalIdentifier">principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions_with_grant_option`<sup>Required</sup> <a name="permissions_with_grant_option" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissionsWithGrantOption"></a>

```python
permissions_with_grant_option: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principal"></a>

```python
principal: DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference">DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference</a>

---

##### `principal_identifier`<sup>Required</sup> <a name="principal_identifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principalIdentifier"></a>

```python
principal_identifier: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resource"></a>

```python
resource: DataAwsccLakeformationPrincipalPermissionsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceOutputReference</a>

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLakeformationPrincipalPermissionsConfig <a name="DataAwsccLakeformationPrincipalPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lakeformation_principal_permissions#id DataAwsccLakeformationPrincipalPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLakeformationPrincipalPermissionsPrincipal <a name="DataAwsccLakeformationPrincipalPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal()
```


### DataAwsccLakeformationPrincipalPermissionsResource <a name="DataAwsccLakeformationPrincipalPermissionsResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource()
```


### DataAwsccLakeformationPrincipalPermissionsResourceDatabase <a name="DataAwsccLakeformationPrincipalPermissionsResourceDatabase" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase()
```


### DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter()
```


### DataAwsccLakeformationPrincipalPermissionsResourceDataLocation <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataLocation" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation()
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTag <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTag" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag()
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy()
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression()
```


### DataAwsccLakeformationPrincipalPermissionsResourceTable <a name="DataAwsccLakeformationPrincipalPermissionsResourceTable" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable()
```


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns()
```


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal">DataAwsccLakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal">DataAwsccLakeformationPrincipalPermissionsPrincipal</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase">DataAwsccLakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase">DataAwsccLakeformationPrincipalPermissionsResourceDatabase</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation">DataAwsccLakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceDataLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation">DataAwsccLakeformationPrincipalPermissionsResourceDataLocation</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag">DataAwsccLakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceLfTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag">DataAwsccLakeformationPrincipalPermissionsResourceLfTag</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression"></a>

```python
expression: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a>

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter">data_cells_filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation">data_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTag">lf_tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy">lf_tag_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource">DataAwsccLakeformationPrincipalPermissionsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.database"></a>

```python
database: DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference</a>

---

##### `data_cells_filter`<sup>Required</sup> <a name="data_cells_filter" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter"></a>

```python
data_cells_filter: DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a>

---

##### `data_location`<sup>Required</sup> <a name="data_location" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation"></a>

```python
data_location: DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference</a>

---

##### `lf_tag`<sup>Required</sup> <a name="lf_tag" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTag"></a>

```python
lf_tag: DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference</a>

---

##### `lf_tag_policy`<sup>Required</sup> <a name="lf_tag_policy" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy"></a>

```python
lf_tag_policy: DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.table"></a>

```python
table: DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference</a>

---

##### `table_with_columns`<sup>Required</sup> <a name="table_with_columns" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns"></a>

```python
table_with_columns: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource">DataAwsccLakeformationPrincipalPermissionsResource</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard">table_wildcard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable">DataAwsccLakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_wildcard`<sup>Required</sup> <a name="table_wildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard"></a>

```python
table_wildcard: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceTable
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable">DataAwsccLakeformationPrincipalPermissionsResourceTable</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_column_names`<sup>Required</sup> <a name="excluded_column_names" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lakeformation_principal_permissions

dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_wildcard`<sup>Required</sup> <a name="column_wildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard"></a>

```python
column_wildcard: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a>

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns</a>

---



