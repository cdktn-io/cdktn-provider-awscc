# `directoryserviceMicrosoftAd` Submodule <a name="`directoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceMicrosoftAd <a name="DirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  vpc_settings: DirectoryserviceMicrosoftAdVpcSettings,
  create_alias: bool | IResolvable = None,
  edition: str = None,
  enable_sso: bool | IResolvable = None,
  password: str = None,
  short_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.name">name</a></code> | <code>str</code> | The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | Specifies the VPC settings of the Microsoft AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.createAlias">create_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies an alias for a directory and assigns the alias to the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.edition">edition</a></code> | <code>str</code> | AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.enableSso">enable_sso</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable single sign-on for a Microsoft Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.password">password</a></code> | <code>str</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.shortName">short_name</a></code> | <code>str</code> | The NetBIOS name for your domain, such as CORP. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.name"></a>

- *Type:* str

The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name DirectoryserviceMicrosoftAd#name}

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

Specifies the VPC settings of the Microsoft AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings DirectoryserviceMicrosoftAd#vpc_settings}

---

##### `create_alias`<sup>Optional</sup> <a name="create_alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.createAlias"></a>

- *Type:* bool | cdktn.IResolvable

Specifies an alias for a directory and assigns the alias to the directory.

The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias DirectoryserviceMicrosoftAd#create_alias}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.edition"></a>

- *Type:* str

AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition DirectoryserviceMicrosoftAd#edition}

---

##### `enable_sso`<sup>Optional</sup> <a name="enable_sso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.enableSso"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable single sign-on for a Microsoft Active Directory in AWS.

Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso DirectoryserviceMicrosoftAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.password"></a>

- *Type:* str

The password for the default administrative user named Admin.

If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password DirectoryserviceMicrosoftAd#password}

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.shortName"></a>

- *Type:* str

The NetBIOS name for your domain, such as CORP.

If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name DirectoryserviceMicrosoftAd#short_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings">put_vpc_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias">reset_create_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso">reset_enable_sso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName">reset_short_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vpc_settings` <a name="put_vpc_settings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings"></a>

```python
def put_vpc_settings(
  subnet_ids: typing.List[str],
  vpc_id: str
) -> None
```

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#subnet_ids DirectoryserviceMicrosoftAd#subnet_ids}

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings.parameter.vpcId"></a>

- *Type:* str

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_id DirectoryserviceMicrosoftAd#vpc_id}

---

##### `reset_create_alias` <a name="reset_create_alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias"></a>

```python
def reset_create_alias() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_enable_sso` <a name="reset_enable_sso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso"></a>

```python
def reset_enable_sso() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_short_name` <a name="reset_short_name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName"></a>

```python
def reset_short_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectoryserviceMicrosoftAd to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput">create_alias_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput">enable_sso_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput">short_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput">vpc_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias">create_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso">enable_sso</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```python
vpc_settings: DirectoryserviceMicrosoftAdVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `create_alias_input`<sup>Optional</sup> <a name="create_alias_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput"></a>

```python
create_alias_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `enable_sso_input`<sup>Optional</sup> <a name="enable_sso_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput"></a>

```python
enable_sso_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `short_name_input`<sup>Optional</sup> <a name="short_name_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput"></a>

```python
short_name_input: str
```

- *Type:* str

---

##### `vpc_settings_input`<sup>Optional</sup> <a name="vpc_settings_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput"></a>

```python
vpc_settings_input: IResolvable | DirectoryserviceMicrosoftAdVpcSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `create_alias`<sup>Required</sup> <a name="create_alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias"></a>

```python
create_alias: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `enable_sso`<sup>Required</sup> <a name="enable_sso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso"></a>

```python
enable_sso: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceMicrosoftAdConfig <a name="DirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  vpc_settings: DirectoryserviceMicrosoftAdVpcSettings,
  create_alias: bool | IResolvable = None,
  edition: str = None,
  enable_sso: bool | IResolvable = None,
  password: str = None,
  short_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name">name</a></code> | <code>str</code> | The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | Specifies the VPC settings of the Microsoft AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias">create_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies an alias for a directory and assigns the alias to the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition">edition</a></code> | <code>str</code> | AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso">enable_sso</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable single sign-on for a Microsoft Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password">password</a></code> | <code>str</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName">short_name</a></code> | <code>str</code> | The NetBIOS name for your domain, such as CORP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name DirectoryserviceMicrosoftAd#name}

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings"></a>

```python
vpc_settings: DirectoryserviceMicrosoftAdVpcSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

Specifies the VPC settings of the Microsoft AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings DirectoryserviceMicrosoftAd#vpc_settings}

---

##### `create_alias`<sup>Optional</sup> <a name="create_alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias"></a>

```python
create_alias: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies an alias for a directory and assigns the alias to the directory.

The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias DirectoryserviceMicrosoftAd#create_alias}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition DirectoryserviceMicrosoftAd#edition}

---

##### `enable_sso`<sup>Optional</sup> <a name="enable_sso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso"></a>

```python
enable_sso: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable single sign-on for a Microsoft Active Directory in AWS.

Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso DirectoryserviceMicrosoftAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the default administrative user named Admin.

If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password DirectoryserviceMicrosoftAd#password}

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

The NetBIOS name for your domain, such as CORP.

If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name DirectoryserviceMicrosoftAd#short_name}

---

### DirectoryserviceMicrosoftAdVpcSettings <a name="DirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings(
  subnet_ids: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId">vpc_id</a></code> | <code>str</code> | The identifier of the VPC in which to create the directory. |

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#subnet_ids DirectoryserviceMicrosoftAd#subnet_ids}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_id DirectoryserviceMicrosoftAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_microsoft_ad

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectoryserviceMicrosoftAdVpcSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---



