# `connectEmailAddress` Submodule <a name="`connectEmailAddress` Submodule" id="@cdktn/provider-awscc.connectEmailAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectEmailAddress <a name="ConnectEmailAddress" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address awscc_connect_email_address}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddress(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  email_address: str,
  instance_arn: str,
  alias_configurations: IResolvable | typing.List[ConnectEmailAddressAliasConfigurations] = None,
  description: str = None,
  display_name: str = None,
  tags: IResolvable | typing.List[ConnectEmailAddressTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.emailAddress">email_address</a></code> | <code>str</code> | Email address to be created for this instance. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.aliasConfigurations">alias_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]</code> | List of alias configurations for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]</code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.emailAddress"></a>

- *Type:* str

Email address to be created for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#email_address ConnectEmailAddress#email_address}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#instance_arn ConnectEmailAddress#instance_arn}

---

##### `alias_configurations`<sup>Optional</sup> <a name="alias_configurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.aliasConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]

List of alias configurations for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#alias_configurations ConnectEmailAddress#alias_configurations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.description"></a>

- *Type:* str

A description for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#description ConnectEmailAddress#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#display_name ConnectEmailAddress#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#tags ConnectEmailAddress#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putAliasConfigurations">put_alias_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetAliasConfigurations">reset_alias_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alias_configurations` <a name="put_alias_configurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putAliasConfigurations"></a>

```python
def put_alias_configurations(
  value: IResolvable | typing.List[ConnectEmailAddressAliasConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putAliasConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectEmailAddressTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]

---

##### `reset_alias_configurations` <a name="reset_alias_configurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetAliasConfigurations"></a>

```python
def reset_alias_configurations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectEmailAddress resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectEmailAddress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectEmailAddress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectEmailAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectEmailAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurations">alias_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList">ConnectEmailAddressAliasConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressArn">email_address_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList">ConnectEmailAddressTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurationsInput">alias_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias_configurations`<sup>Required</sup> <a name="alias_configurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurations"></a>

```python
alias_configurations: ConnectEmailAddressAliasConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList">ConnectEmailAddressAliasConfigurationsList</a>

---

##### `email_address_arn`<sup>Required</sup> <a name="email_address_arn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressArn"></a>

```python
email_address_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tags"></a>

```python
tags: ConnectEmailAddressTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList">ConnectEmailAddressTagsList</a>

---

##### `alias_configurations_input`<sup>Optional</sup> <a name="alias_configurations_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurationsInput"></a>

```python
alias_configurations_input: IResolvable | typing.List[ConnectEmailAddressAliasConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectEmailAddressTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectEmailAddressAliasConfigurations <a name="ConnectEmailAddressAliasConfigurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddressAliasConfigurations(
  email_address_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations.property.emailAddressArn">email_address_arn</a></code> | <code>str</code> | The identifier of the email address alias. |

---

##### `email_address_arn`<sup>Optional</sup> <a name="email_address_arn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations.property.emailAddressArn"></a>

```python
email_address_arn: str
```

- *Type:* str

The identifier of the email address alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#email_address_arn ConnectEmailAddress#email_address_arn}

---

### ConnectEmailAddressConfig <a name="ConnectEmailAddressConfig" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddressConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  email_address: str,
  instance_arn: str,
  alias_configurations: IResolvable | typing.List[ConnectEmailAddressAliasConfigurations] = None,
  description: str = None,
  display_name: str = None,
  tags: IResolvable | typing.List[ConnectEmailAddressTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.emailAddress">email_address</a></code> | <code>str</code> | Email address to be created for this instance. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.aliasConfigurations">alias_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]</code> | List of alias configurations for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.description">description</a></code> | <code>str</code> | A description for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Email address to be created for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#email_address ConnectEmailAddress#email_address}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#instance_arn ConnectEmailAddress#instance_arn}

---

##### `alias_configurations`<sup>Optional</sup> <a name="alias_configurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.aliasConfigurations"></a>

```python
alias_configurations: IResolvable | typing.List[ConnectEmailAddressAliasConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]

List of alias configurations for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#alias_configurations ConnectEmailAddress#alias_configurations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#description ConnectEmailAddress#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#display_name ConnectEmailAddress#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectEmailAddressTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#tags ConnectEmailAddress#tags}

---

### ConnectEmailAddressTags <a name="ConnectEmailAddressTags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddressTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#key ConnectEmailAddress#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_email_address#value ConnectEmailAddress#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectEmailAddressAliasConfigurationsList <a name="ConnectEmailAddressAliasConfigurationsList" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddressAliasConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectEmailAddressAliasConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectEmailAddressAliasConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>]

---


### ConnectEmailAddressAliasConfigurationsOutputReference <a name="ConnectEmailAddressAliasConfigurationsOutputReference" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resetEmailAddressArn">reset_email_address_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_address_arn` <a name="reset_email_address_arn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resetEmailAddressArn"></a>

```python
def reset_email_address_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArnInput">email_address_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArn">email_address_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address_arn_input`<sup>Optional</sup> <a name="email_address_arn_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArnInput"></a>

```python
email_address_arn_input: str
```

- *Type:* str

---

##### `email_address_arn`<sup>Required</sup> <a name="email_address_arn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArn"></a>

```python
email_address_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectEmailAddressAliasConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>

---


### ConnectEmailAddressTagsList <a name="ConnectEmailAddressTagsList" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddressTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectEmailAddressTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectEmailAddressTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>]

---


### ConnectEmailAddressTagsOutputReference <a name="ConnectEmailAddressTagsOutputReference" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_email_address

connectEmailAddress.ConnectEmailAddressTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectEmailAddressTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>

---



