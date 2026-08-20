# `dataAwsccPcaconnectoradServicePrincipalName` Submodule <a name="`dataAwsccPcaconnectoradServicePrincipalName` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectoradServicePrincipalName <a name="DataAwsccPcaconnectoradServicePrincipalName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorad_service_principal_name awscc_pcaconnectorad_service_principal_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_service_principal_name

dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorad_service_principal_name#id DataAwsccPcaconnectoradServicePrincipalName#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectoradServicePrincipalName resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_service_principal_name

dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_service_principal_name

dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_service_principal_name

dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_service_principal_name

dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccPcaconnectoradServicePrincipalName resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccPcaconnectoradServicePrincipalName to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccPcaconnectoradServicePrincipalName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorad_service_principal_name#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectoradServicePrincipalName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.directoryRegistrationArn">directory_registration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `directory_registration_arn`<sup>Required</sup> <a name="directory_registration_arn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.directoryRegistrationArn"></a>

```python
directory_registration_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalName.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectoradServicePrincipalNameConfig <a name="DataAwsccPcaconnectoradServicePrincipalNameConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_service_principal_name

dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradServicePrincipalName.DataAwsccPcaconnectoradServicePrincipalNameConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/pcaconnectorad_service_principal_name#id DataAwsccPcaconnectoradServicePrincipalName#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



