# `route53ProfilesProfileResourceAssociation` Submodule <a name="`route53ProfilesProfileResourceAssociation` Submodule" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesProfileResourceAssociation <a name="Route53ProfilesProfileResourceAssociation" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association awscc_route53profiles_profile_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_resource_association

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation(
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
  resource_arn: str,
  resource_properties: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of an association between the  Profile and resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | The ID of the  profile that you associated the resource to that is specified by ResourceArn. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | The arn of the resource that you associated to the  Profile. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceProperties">resource_properties</a></code> | <code>str</code> | A JSON-formatted string with key-value pairs specifying the properties of the associated resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.name"></a>

- *Type:* str

The name of an association between the  Profile and resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#name Route53ProfilesProfileResourceAssociation#name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.profileId"></a>

- *Type:* str

The ID of the  profile that you associated the resource to that is specified by ResourceArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#profile_id Route53ProfilesProfileResourceAssociation#profile_id}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceArn"></a>

- *Type:* str

The arn of the resource that you associated to the  Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#resource_arn Route53ProfilesProfileResourceAssociation#resource_arn}

---

##### `resource_properties`<sup>Optional</sup> <a name="resource_properties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.resourceProperties"></a>

- *Type:* str

A JSON-formatted string with key-value pairs specifying the properties of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#resource_properties Route53ProfilesProfileResourceAssociation#resource_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetResourceProperties">reset_resource_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_resource_properties` <a name="reset_resource_properties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetResourceProperties"></a>

```python
def reset_resource_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_resource_association

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_resource_association

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_resource_association

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_resource_association

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ProfilesProfileResourceAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ProfilesProfileResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ProfilesProfileResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileResourceAssociationId">profile_resource_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourcePropertiesInput">resource_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceProperties">resource_properties</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `profile_resource_association_id`<sup>Required</sup> <a name="profile_resource_association_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileResourceAssociationId"></a>

```python
profile_resource_association_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `resource_properties_input`<sup>Optional</sup> <a name="resource_properties_input" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourcePropertiesInput"></a>

```python
resource_properties_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `resource_properties`<sup>Required</sup> <a name="resource_properties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceProperties"></a>

```python
resource_properties: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesProfileResourceAssociationConfig <a name="Route53ProfilesProfileResourceAssociationConfig" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_profiles_profile_resource_association

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  profile_id: str,
  resource_arn: str,
  resource_properties: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.name">name</a></code> | <code>str</code> | The name of an association between the  Profile and resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.profileId">profile_id</a></code> | <code>str</code> | The ID of the  profile that you associated the resource to that is specified by ResourceArn. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | The arn of the resource that you associated to the  Profile. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceProperties">resource_properties</a></code> | <code>str</code> | A JSON-formatted string with key-value pairs specifying the properties of the associated resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of an association between the  Profile and resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#name Route53ProfilesProfileResourceAssociation#name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The ID of the  profile that you associated the resource to that is specified by ResourceArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#profile_id Route53ProfilesProfileResourceAssociation#profile_id}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The arn of the resource that you associated to the  Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#resource_arn Route53ProfilesProfileResourceAssociation#resource_arn}

---

##### `resource_properties`<sup>Optional</sup> <a name="resource_properties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceProperties"></a>

```python
resource_properties: str
```

- *Type:* str

A JSON-formatted string with key-value pairs specifying the properties of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53profiles_profile_resource_association#resource_properties Route53ProfilesProfileResourceAssociation#resource_properties}

---



