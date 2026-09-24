# `dataAwsccLicensemanagerLicenseAssetGroup` Submodule <a name="`dataAwsccLicensemanagerLicenseAssetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerLicenseAssetGroup <a name="DataAwsccLicensemanagerLicenseAssetGroup" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group#id DataAwsccLicensemanagerLicenseAssetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLicensemanagerLicenseAssetGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLicensemanagerLicenseAssetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerLicenseAssetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs">associated_license_asset_ruleset_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn">license_asset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations">license_asset_group_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList">DataAwsccLicensemanagerLicenseAssetGroupPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList">DataAwsccLicensemanagerLicenseAssetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `associated_license_asset_ruleset_ar_ns`<sup>Required</sup> <a name="associated_license_asset_ruleset_ar_ns" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs"></a>

```python
associated_license_asset_ruleset_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `license_asset_group_arn`<sup>Required</sup> <a name="license_asset_group_arn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn"></a>

```python
license_asset_group_arn: str
```

- *Type:* str

---

##### `license_asset_group_configurations`<sup>Required</sup> <a name="license_asset_group_configurations" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations"></a>

```python
license_asset_group_configurations: DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.properties"></a>

```python
properties: DataAwsccLicensemanagerLicenseAssetGroupPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList">DataAwsccLicensemanagerLicenseAssetGroupPropertiesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tags"></a>

```python
tags: DataAwsccLicensemanagerLicenseAssetGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList">DataAwsccLicensemanagerLicenseAssetGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerLicenseAssetGroupConfig <a name="DataAwsccLicensemanagerLicenseAssetGroupConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/licensemanager_license_asset_group#id DataAwsccLicensemanagerLicenseAssetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations()
```


### DataAwsccLicensemanagerLicenseAssetGroupProperties <a name="DataAwsccLicensemanagerLicenseAssetGroupProperties" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties()
```


### DataAwsccLicensemanagerLicenseAssetGroupTags <a name="DataAwsccLicensemanagerLicenseAssetGroupTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension">usage_dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `usage_dimension`<sup>Required</sup> <a name="usage_dimension" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension"></a>

```python
usage_dimension: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">DataAwsccLicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>

---


### DataAwsccLicensemanagerLicenseAssetGroupPropertiesList <a name="DataAwsccLicensemanagerLicenseAssetGroupPropertiesList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties">DataAwsccLicensemanagerLicenseAssetGroupProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerLicenseAssetGroupProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupProperties">DataAwsccLicensemanagerLicenseAssetGroupProperties</a>

---


### DataAwsccLicensemanagerLicenseAssetGroupTagsList <a name="DataAwsccLicensemanagerLicenseAssetGroupTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference <a name="DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanager_license_asset_group

dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags">DataAwsccLicensemanagerLicenseAssetGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerLicenseAssetGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicenseAssetGroup.DataAwsccLicensemanagerLicenseAssetGroupTags">DataAwsccLicensemanagerLicenseAssetGroupTags</a>

---



