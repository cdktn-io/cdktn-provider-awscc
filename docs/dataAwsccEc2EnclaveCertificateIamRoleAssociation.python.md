# `dataAwsccEc2EnclaveCertificateIamRoleAssociation` Submodule <a name="`dataAwsccEc2EnclaveCertificateIamRoleAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2EnclaveCertificateIamRoleAssociation <a name="DataAwsccEc2EnclaveCertificateIamRoleAssociation" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_enclave_certificate_iam_role_association awscc_ec2_enclave_certificate_iam_role_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_enclave_certificate_iam_role_association

dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_enclave_certificate_iam_role_association#id DataAwsccEc2EnclaveCertificateIamRoleAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_enclave_certificate_iam_role_association

dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_enclave_certificate_iam_role_association

dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_enclave_certificate_iam_role_association

dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_enclave_certificate_iam_role_association

dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2EnclaveCertificateIamRoleAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2EnclaveCertificateIamRoleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_enclave_certificate_iam_role_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2EnclaveCertificateIamRoleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.certificateS3BucketName">certificate_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.certificateS3ObjectKey">certificate_s3_object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.encryptionKmsKeyId">encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `certificate_s3_bucket_name`<sup>Required</sup> <a name="certificate_s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.certificateS3BucketName"></a>

```python
certificate_s3_bucket_name: str
```

- *Type:* str

---

##### `certificate_s3_object_key`<sup>Required</sup> <a name="certificate_s3_object_key" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.certificateS3ObjectKey"></a>

```python
certificate_s3_object_key: str
```

- *Type:* str

---

##### `encryption_kms_key_id`<sup>Required</sup> <a name="encryption_kms_key_id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.encryptionKmsKeyId"></a>

```python
encryption_kms_key_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig <a name="DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_enclave_certificate_iam_role_association

dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2EnclaveCertificateIamRoleAssociation.DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_enclave_certificate_iam_role_association#id DataAwsccEc2EnclaveCertificateIamRoleAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



