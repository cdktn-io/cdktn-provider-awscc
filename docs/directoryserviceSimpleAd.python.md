# `directoryserviceSimpleAd` Submodule <a name="`directoryserviceSimpleAd` Submodule" id="@cdktn/provider-awscc.directoryserviceSimpleAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceSimpleAd <a name="DirectoryserviceSimpleAd" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad awscc_directoryservice_simple_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAd(
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
  size: str,
  vpc_settings: DirectoryserviceSimpleAdVpcSettings,
  create_alias: bool | IResolvable = None,
  description: str = None,
  enable_sso: bool | IResolvable = None,
  password: str = None,
  short_name: str = None,
  tags: IResolvable | typing.List[DirectoryserviceSimpleAdTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.name">name</a></code> | <code>str</code> | The fully qualified domain name for the AWS Managed Simple AD directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.size">size</a></code> | <code>str</code> | The size of the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | VPC settings of the Simple AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.createAlias">create_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.enableSso">enable_sso</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable single sign-on for a Simple Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.password">password</a></code> | <code>str</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.shortName">short_name</a></code> | <code>str</code> | The NetBIOS name for your domain. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.name"></a>

- *Type:* str

The fully qualified domain name for the AWS Managed Simple AD directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#name DirectoryserviceSimpleAd#name}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.size"></a>

- *Type:* str

The size of the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#size DirectoryserviceSimpleAd#size}

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

VPC settings of the Simple AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#vpc_settings DirectoryserviceSimpleAd#vpc_settings}

---

##### `create_alias`<sup>Optional</sup> <a name="create_alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.createAlias"></a>

- *Type:* bool | cdktn.IResolvable

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#create_alias DirectoryserviceSimpleAd#create_alias}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.description"></a>

- *Type:* str

Description for the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#description DirectoryserviceSimpleAd#description}

---

##### `enable_sso`<sup>Optional</sup> <a name="enable_sso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.enableSso"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable single sign-on for a Simple Active Directory in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#enable_sso DirectoryserviceSimpleAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.password"></a>

- *Type:* str

The password for the default administrative user named Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#password DirectoryserviceSimpleAd#password}

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.shortName"></a>

- *Type:* str

The NetBIOS name for your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#short_name DirectoryserviceSimpleAd#short_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings">put_vpc_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias">reset_create_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso">reset_enable_sso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName">reset_short_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DirectoryserviceSimpleAdTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]

---

##### `put_vpc_settings` <a name="put_vpc_settings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings"></a>

```python
def put_vpc_settings(
  subnet_ids: typing.List[str],
  vpc_id: str
) -> None
```

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#subnet_ids DirectoryserviceSimpleAd#subnet_ids}

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings.parameter.vpcId"></a>

- *Type:* str

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#vpc_id DirectoryserviceSimpleAd#vpc_id}

---

##### `reset_create_alias` <a name="reset_create_alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias"></a>

```python
def reset_create_alias() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_sso` <a name="reset_enable_sso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso"></a>

```python
def reset_enable_sso() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_short_name` <a name="reset_short_name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName"></a>

```python
def reset_short_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAd.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAd.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAd.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAd.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectoryserviceSimpleAd to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectoryserviceSimpleAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceSimpleAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput">create_alias_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput">enable_sso_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput">short_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput">vpc_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias">create_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso">enable_sso</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size">size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags"></a>

```python
tags: DirectoryserviceSimpleAdTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a>

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings"></a>

```python
vpc_settings: DirectoryserviceSimpleAdVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a>

---

##### `create_alias_input`<sup>Optional</sup> <a name="create_alias_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput"></a>

```python
create_alias_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_sso_input`<sup>Optional</sup> <a name="enable_sso_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput"></a>

```python
enable_sso_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `short_name_input`<sup>Optional</sup> <a name="short_name_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput"></a>

```python
short_name_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DirectoryserviceSimpleAdTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]

---

##### `vpc_settings_input`<sup>Optional</sup> <a name="vpc_settings_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput"></a>

```python
vpc_settings_input: IResolvable | DirectoryserviceSimpleAdVpcSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---

##### `create_alias`<sup>Required</sup> <a name="create_alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias"></a>

```python
create_alias: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_sso`<sup>Required</sup> <a name="enable_sso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso"></a>

```python
enable_sso: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size"></a>

```python
size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceSimpleAdConfig <a name="DirectoryserviceSimpleAdConfig" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  size: str,
  vpc_settings: DirectoryserviceSimpleAdVpcSettings,
  create_alias: bool | IResolvable = None,
  description: str = None,
  enable_sso: bool | IResolvable = None,
  password: str = None,
  short_name: str = None,
  tags: IResolvable | typing.List[DirectoryserviceSimpleAdTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name">name</a></code> | <code>str</code> | The fully qualified domain name for the AWS Managed Simple AD directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size">size</a></code> | <code>str</code> | The size of the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | VPC settings of the Simple AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias">create_alias</a></code> | <code>bool \| cdktn.IResolvable</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description">description</a></code> | <code>str</code> | Description for the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso">enable_sso</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable single sign-on for a Simple Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password">password</a></code> | <code>str</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName">short_name</a></code> | <code>str</code> | The NetBIOS name for your domain. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The fully qualified domain name for the AWS Managed Simple AD directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#name DirectoryserviceSimpleAd#name}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size"></a>

```python
size: str
```

- *Type:* str

The size of the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#size DirectoryserviceSimpleAd#size}

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings"></a>

```python
vpc_settings: DirectoryserviceSimpleAdVpcSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

VPC settings of the Simple AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#vpc_settings DirectoryserviceSimpleAd#vpc_settings}

---

##### `create_alias`<sup>Optional</sup> <a name="create_alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias"></a>

```python
create_alias: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#create_alias DirectoryserviceSimpleAd#create_alias}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#description DirectoryserviceSimpleAd#description}

---

##### `enable_sso`<sup>Optional</sup> <a name="enable_sso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso"></a>

```python
enable_sso: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable single sign-on for a Simple Active Directory in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#enable_sso DirectoryserviceSimpleAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the default administrative user named Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#password DirectoryserviceSimpleAd#password}

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

The NetBIOS name for your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#short_name DirectoryserviceSimpleAd#short_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DirectoryserviceSimpleAdTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}.

---

### DirectoryserviceSimpleAdTags <a name="DirectoryserviceSimpleAdTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAdTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#key DirectoryserviceSimpleAd#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#value DirectoryserviceSimpleAd#value}

---

### DirectoryserviceSimpleAdVpcSettings <a name="DirectoryserviceSimpleAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings(
  subnet_ids: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId">vpc_id</a></code> | <code>str</code> | The identifier of the VPC in which to create the directory. |

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#subnet_ids DirectoryserviceSimpleAd#subnet_ids}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directoryservice_simple_ad#vpc_id DirectoryserviceSimpleAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceSimpleAdTagsList <a name="DirectoryserviceSimpleAdTagsList" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DirectoryserviceSimpleAdTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DirectoryserviceSimpleAdTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>]

---


### DirectoryserviceSimpleAdTagsOutputReference <a name="DirectoryserviceSimpleAdTagsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectoryserviceSimpleAdTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>

---


### DirectoryserviceSimpleAdVpcSettingsOutputReference <a name="DirectoryserviceSimpleAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import directoryservice_simple_ad

directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectoryserviceSimpleAdVpcSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---



