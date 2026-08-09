# `route53ProfilesProfileAssociation` Submodule <a name="`route53ProfilesProfileAssociation` Submodule" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesProfileAssociation <a name="Route53ProfilesProfileAssociation" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association awscc_route53profiles_profile_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation(
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
  profile_id: str,
  resource_id: str,
  arn: str = None,
  tags: IResolvable | typing.List[Route53ProfilesProfileAssociationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of an association between a  Profile and a VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | The ID of the  profile that you associated with the resource that is specified by ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The resource that you associated the  profile with. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.arn">arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the profile association. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.name"></a>

- *Type:* str

The name of an association between a  Profile and a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#name Route53ProfilesProfileAssociation#name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.profileId"></a>

- *Type:* str

The ID of the  profile that you associated with the resource that is specified by ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#profile_id Route53ProfilesProfileAssociation#profile_id}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.resourceId"></a>

- *Type:* str

The resource that you associated the  profile with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#resource_id Route53ProfilesProfileAssociation#resource_id}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.arn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the profile association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#arn Route53ProfilesProfileAssociation#arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#tags Route53ProfilesProfileAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53ProfilesProfileAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53ProfilesProfileAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53ProfilesProfileAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ProfilesProfileAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ProfilesProfileAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ProfilesProfileAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileAssociationId">profile_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList">Route53ProfilesProfileAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `profile_association_id`<sup>Required</sup> <a name="profile_association_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileAssociationId"></a>

```python
profile_association_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tags"></a>

```python
tags: Route53ProfilesProfileAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList">Route53ProfilesProfileAssociationTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53ProfilesProfileAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesProfileAssociationConfig <a name="Route53ProfilesProfileAssociationConfig" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  profile_id: str,
  resource_id: str,
  arn: str = None,
  tags: IResolvable | typing.List[Route53ProfilesProfileAssociationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.name">name</a></code> | <code>str</code> | The name of an association between a  Profile and a VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.profileId">profile_id</a></code> | <code>str</code> | The ID of the  profile that you associated with the resource that is specified by ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The resource that you associated the  profile with. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.arn">arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the profile association. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of an association between a  Profile and a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#name Route53ProfilesProfileAssociation#name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The ID of the  profile that you associated with the resource that is specified by ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#profile_id Route53ProfilesProfileAssociation#profile_id}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The resource that you associated the  profile with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#resource_id Route53ProfilesProfileAssociation#resource_id}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the profile association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#arn Route53ProfilesProfileAssociation#arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53ProfilesProfileAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#tags Route53ProfilesProfileAssociation#tags}

---

### Route53ProfilesProfileAssociationTags <a name="Route53ProfilesProfileAssociationTags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#key Route53ProfilesProfileAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#value Route53ProfilesProfileAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ProfilesProfileAssociationTagsList <a name="Route53ProfilesProfileAssociationTagsList" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ProfilesProfileAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ProfilesProfileAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>]

---


### Route53ProfilesProfileAssociationTagsOutputReference <a name="Route53ProfilesProfileAssociationTagsOutputReference" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_association

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ProfilesProfileAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>

---



