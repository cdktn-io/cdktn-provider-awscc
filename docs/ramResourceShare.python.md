# `ramResourceShare` Submodule <a name="`ramResourceShare` Submodule" id="@cdktn/provider-awscc.ramResourceShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RamResourceShare <a name="RamResourceShare" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share awscc_ram_resource_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShare(
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
  allow_external_principals: bool | IResolvable = None,
  permission_arns: typing.List[str] = None,
  principals: typing.List[str] = None,
  resource_arns: typing.List[str] = None,
  resource_share_configuration: RamResourceShareResourceShareConfiguration = None,
  sources: typing.List[str] = None,
  tags: IResolvable | typing.List[RamResourceShareTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.allowExternalPrincipals">allow_external_principals</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.permissionArns">permission_arns</a></code> | <code>typing.List[str]</code> | Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.principals">principals</a></code> | <code>typing.List[str]</code> | Specifies the principals to associate with the resource share. The possible values are:. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | Specifies a list of one or more ARNs of the resources to associate with the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceShareConfiguration">resource_share_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | Specifies the configuration for the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.sources">sources</a></code> | <code>typing.List[str]</code> | Specifies from which source accounts the service principal has access to the resources in this resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]</code> | Specifies one or more tags to attach to the resource share itself. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#name RamResourceShare#name}

---

##### `allow_external_principals`<sup>Optional</sup> <a name="allow_external_principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.allowExternalPrincipals"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.

A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}

---

##### `permission_arns`<sup>Optional</sup> <a name="permission_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.permissionArns"></a>

- *Type:* typing.List[str]

Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.principals"></a>

- *Type:* typing.List[str]

Specifies the principals to associate with the resource share. The possible values are:.

* An AWS account ID
* An Amazon Resource Name (ARN) of an organization in AWS Organizations
* An ARN of an organizational unit (OU) in AWS Organizations
* An ARN of an IAM role
* An ARN of an IAM user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#principals RamResourceShare#principals}

---

##### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceArns"></a>

- *Type:* typing.List[str]

Specifies a list of one or more ARNs of the resources to associate with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#resource_arns RamResourceShare#resource_arns}

---

##### `resource_share_configuration`<sup>Optional</sup> <a name="resource_share_configuration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.resourceShareConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

Specifies the configuration for the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#resource_share_configuration RamResourceShare#resource_share_configuration}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.sources"></a>

- *Type:* typing.List[str]

Specifies from which source accounts the service principal has access to the resources in this resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#sources RamResourceShare#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]

Specifies one or more tags to attach to the resource share itself.

It doesn't attach the tags to the resources associated with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration">put_resource_share_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals">reset_allow_external_principals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns">reset_permission_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals">reset_principals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns">reset_resource_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration">reset_resource_share_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources">reset_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_share_configuration` <a name="put_resource_share_configuration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration"></a>

```python
def put_resource_share_configuration(
  exclusive_account_access: bool | IResolvable = None,
  retain_sharing_on_account_leave_organization: bool | IResolvable = None
) -> None
```

###### `exclusive_account_access`<sup>Optional</sup> <a name="exclusive_account_access" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration.parameter.exclusiveAccountAccess"></a>

- *Type:* bool | cdktn.IResolvable

The resource share restricts access to an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#exclusive_account_access RamResourceShare#exclusive_account_access}

---

###### `retain_sharing_on_account_leave_organization`<sup>Optional</sup> <a name="retain_sharing_on_account_leave_organization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration.parameter.retainSharingOnAccountLeaveOrganization"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the consumer account retains access to the resource share after leaving the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#retain_sharing_on_account_leave_organization RamResourceShare#retain_sharing_on_account_leave_organization}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RamResourceShareTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]

---

##### `reset_allow_external_principals` <a name="reset_allow_external_principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals"></a>

```python
def reset_allow_external_principals() -> None
```

##### `reset_permission_arns` <a name="reset_permission_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns"></a>

```python
def reset_permission_arns() -> None
```

##### `reset_principals` <a name="reset_principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals"></a>

```python
def reset_principals() -> None
```

##### `reset_resource_arns` <a name="reset_resource_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns"></a>

```python
def reset_resource_arns() -> None
```

##### `reset_resource_share_configuration` <a name="reset_resource_share_configuration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration"></a>

```python
def reset_resource_share_configuration() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources"></a>

```python
def reset_sources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RamResourceShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RamResourceShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RamResourceShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet">feature_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId">owning_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration">resource_share_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput">allow_external_principals_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput">permission_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput">resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput">resource_share_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput">sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals">allow_external_principals</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns">permission_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources">sources</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `owning_account_id`<sup>Required</sup> <a name="owning_account_id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId"></a>

```python
owning_account_id: str
```

- *Type:* str

---

##### `resource_share_configuration`<sup>Required</sup> <a name="resource_share_configuration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration"></a>

```python
resource_share_configuration: RamResourceShareResourceShareConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags"></a>

```python
tags: RamResourceShareTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a>

---

##### `allow_external_principals_input`<sup>Optional</sup> <a name="allow_external_principals_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput"></a>

```python
allow_external_principals_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_arns_input`<sup>Optional</sup> <a name="permission_arns_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput"></a>

```python
permission_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arns_input`<sup>Optional</sup> <a name="resource_arns_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput"></a>

```python
resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_share_configuration_input`<sup>Optional</sup> <a name="resource_share_configuration_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput"></a>

```python
resource_share_configuration_input: IResolvable | RamResourceShareResourceShareConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput"></a>

```python
sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RamResourceShareTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]

---

##### `allow_external_principals`<sup>Required</sup> <a name="allow_external_principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals"></a>

```python
allow_external_principals: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission_arns`<sup>Required</sup> <a name="permission_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns"></a>

```python
permission_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RamResourceShareConfig <a name="RamResourceShareConfig" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShareConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allow_external_principals: bool | IResolvable = None,
  permission_arns: typing.List[str] = None,
  principals: typing.List[str] = None,
  resource_arns: typing.List[str] = None,
  resource_share_configuration: RamResourceShareResourceShareConfiguration = None,
  sources: typing.List[str] = None,
  tags: IResolvable | typing.List[RamResourceShareTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals">allow_external_principals</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns">permission_arns</a></code> | <code>typing.List[str]</code> | Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals">principals</a></code> | <code>typing.List[str]</code> | Specifies the principals to associate with the resource share. The possible values are:. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | Specifies a list of one or more ARNs of the resources to associate with the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration">resource_share_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | Specifies the configuration for the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources">sources</a></code> | <code>typing.List[str]</code> | Specifies from which source accounts the service principal has access to the resources in this resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]</code> | Specifies one or more tags to attach to the resource share itself. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#name RamResourceShare#name}

---

##### `allow_external_principals`<sup>Optional</sup> <a name="allow_external_principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals"></a>

```python
allow_external_principals: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.

A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}

---

##### `permission_arns`<sup>Optional</sup> <a name="permission_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns"></a>

```python
permission_arns: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the principals to associate with the resource share. The possible values are:.

* An AWS account ID
* An Amazon Resource Name (ARN) of an organization in AWS Organizations
* An ARN of an organizational unit (OU) in AWS Organizations
* An ARN of an IAM role
* An ARN of an IAM user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#principals RamResourceShare#principals}

---

##### `resource_arns`<sup>Optional</sup> <a name="resource_arns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of one or more ARNs of the resources to associate with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#resource_arns RamResourceShare#resource_arns}

---

##### `resource_share_configuration`<sup>Optional</sup> <a name="resource_share_configuration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration"></a>

```python
resource_share_configuration: RamResourceShareResourceShareConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

Specifies the configuration for the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#resource_share_configuration RamResourceShare#resource_share_configuration}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

Specifies from which source accounts the service principal has access to the resources in this resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#sources RamResourceShare#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RamResourceShareTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]

Specifies one or more tags to attach to the resource share itself.

It doesn't attach the tags to the resources associated with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}

---

### RamResourceShareResourceShareConfiguration <a name="RamResourceShareResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShareResourceShareConfiguration(
  exclusive_account_access: bool | IResolvable = None,
  retain_sharing_on_account_leave_organization: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess">exclusive_account_access</a></code> | <code>bool \| cdktn.IResolvable</code> | The resource share restricts access to an account. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization">retain_sharing_on_account_leave_organization</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the consumer account retains access to the resource share after leaving the organization. |

---

##### `exclusive_account_access`<sup>Optional</sup> <a name="exclusive_account_access" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess"></a>

```python
exclusive_account_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The resource share restricts access to an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#exclusive_account_access RamResourceShare#exclusive_account_access}

---

##### `retain_sharing_on_account_leave_organization`<sup>Optional</sup> <a name="retain_sharing_on_account_leave_organization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization"></a>

```python
retain_sharing_on_account_leave_organization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the consumer account retains access to the resource share after leaving the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#retain_sharing_on_account_leave_organization RamResourceShare#retain_sharing_on_account_leave_organization}

---

### RamResourceShareTags <a name="RamResourceShareTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.Initializer"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShareTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#key RamResourceShare#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ram_resource_share#value RamResourceShare#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RamResourceShareResourceShareConfigurationOutputReference <a name="RamResourceShareResourceShareConfigurationOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess">reset_exclusive_account_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization">reset_retain_sharing_on_account_leave_organization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclusive_account_access` <a name="reset_exclusive_account_access" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess"></a>

```python
def reset_exclusive_account_access() -> None
```

##### `reset_retain_sharing_on_account_leave_organization` <a name="reset_retain_sharing_on_account_leave_organization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization"></a>

```python
def reset_retain_sharing_on_account_leave_organization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput">exclusive_account_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput">retain_sharing_on_account_leave_organization_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess">exclusive_account_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization">retain_sharing_on_account_leave_organization</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusive_account_access_input`<sup>Optional</sup> <a name="exclusive_account_access_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput"></a>

```python
exclusive_account_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retain_sharing_on_account_leave_organization_input`<sup>Optional</sup> <a name="retain_sharing_on_account_leave_organization_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput"></a>

```python
retain_sharing_on_account_leave_organization_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclusive_account_access`<sup>Required</sup> <a name="exclusive_account_access" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess"></a>

```python
exclusive_account_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retain_sharing_on_account_leave_organization`<sup>Required</sup> <a name="retain_sharing_on_account_leave_organization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization"></a>

```python
retain_sharing_on_account_leave_organization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RamResourceShareResourceShareConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---


### RamResourceShareTagsList <a name="RamResourceShareTagsList" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShareTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RamResourceShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RamResourceShareTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>]

---


### RamResourceShareTagsOutputReference <a name="RamResourceShareTagsOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ram_resource_share

ramResourceShare.RamResourceShareTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RamResourceShareTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>

---



