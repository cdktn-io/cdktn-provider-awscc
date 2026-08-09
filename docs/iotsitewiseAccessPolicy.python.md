# `iotsitewiseAccessPolicy` Submodule <a name="`iotsitewiseAccessPolicy` Submodule" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAccessPolicy <a name="IotsitewiseAccessPolicy" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy awscc_iotsitewise_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_identity: IotsitewiseAccessPolicyAccessPolicyIdentity,
  access_policy_permission: str,
  access_policy_resource: IotsitewiseAccessPolicyAccessPolicyResource
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyIdentity">access_policy_identity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | The identity for this access policy. Choose either a user or a group but not both. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyPermission">access_policy_permission</a></code> | <code>str</code> | The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyResource">access_policy_resource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_identity`<sup>Required</sup> <a name="access_policy_identity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

The identity for this access policy. Choose either a user or a group but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#access_policy_identity IotsitewiseAccessPolicy#access_policy_identity}

---

##### `access_policy_permission`<sup>Required</sup> <a name="access_policy_permission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyPermission"></a>

- *Type:* str

The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#access_policy_permission IotsitewiseAccessPolicy#access_policy_permission}

---

##### `access_policy_resource`<sup>Required</sup> <a name="access_policy_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.Initializer.parameter.accessPolicyResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#access_policy_resource IotsitewiseAccessPolicy#access_policy_resource}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity">put_access_policy_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource">put_access_policy_resource</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_policy_identity` <a name="put_access_policy_identity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity"></a>

```python
def put_access_policy_identity(
  iam_role: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole = None,
  iam_user: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser = None,
  user: IotsitewiseAccessPolicyAccessPolicyIdentityUser = None
) -> None
```

###### `iam_role`<sup>Optional</sup> <a name="iam_role" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity.parameter.iamRole"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

Contains information for an IAM role identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#iam_role IotsitewiseAccessPolicy#iam_role}

---

###### `iam_user`<sup>Optional</sup> <a name="iam_user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity.parameter.iamUser"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

Contains information for an IAM user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#iam_user IotsitewiseAccessPolicy#iam_user}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyIdentity.parameter.user"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

Contains information for a user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#user IotsitewiseAccessPolicy#user}

---

##### `put_access_policy_resource` <a name="put_access_policy_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource"></a>

```python
def put_access_policy_resource(
  portal: IotsitewiseAccessPolicyAccessPolicyResourcePortal = None,
  project: IotsitewiseAccessPolicyAccessPolicyResourceProject = None
) -> None
```

###### `portal`<sup>Optional</sup> <a name="portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource.parameter.portal"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

A portal resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#portal IotsitewiseAccessPolicy#portal}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.putAccessPolicyResource.parameter.project"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

A project resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#project IotsitewiseAccessPolicy#project}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotsitewiseAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotsitewiseAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyArn">access_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentity">access_policy_identity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResource">access_policy_resource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentityInput">access_policy_identity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermissionInput">access_policy_permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResourceInput">access_policy_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermission">access_policy_permission</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_arn`<sup>Required</sup> <a name="access_policy_arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyArn"></a>

```python
access_policy_arn: str
```

- *Type:* str

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `access_policy_identity`<sup>Required</sup> <a name="access_policy_identity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentity"></a>

```python
access_policy_identity: IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a>

---

##### `access_policy_resource`<sup>Required</sup> <a name="access_policy_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResource"></a>

```python
access_policy_resource: IotsitewiseAccessPolicyAccessPolicyResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `access_policy_identity_input`<sup>Optional</sup> <a name="access_policy_identity_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyIdentityInput"></a>

```python
access_policy_identity_input: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

---

##### `access_policy_permission_input`<sup>Optional</sup> <a name="access_policy_permission_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermissionInput"></a>

```python
access_policy_permission_input: str
```

- *Type:* str

---

##### `access_policy_resource_input`<sup>Optional</sup> <a name="access_policy_resource_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyResourceInput"></a>

```python
access_policy_resource_input: IResolvable | IotsitewiseAccessPolicyAccessPolicyResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

---

##### `access_policy_permission`<sup>Required</sup> <a name="access_policy_permission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.accessPolicyPermission"></a>

```python
access_policy_permission: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAccessPolicyAccessPolicyIdentity <a name="IotsitewiseAccessPolicyAccessPolicyIdentity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity(
  iam_role: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole = None,
  iam_user: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser = None,
  user: IotsitewiseAccessPolicyAccessPolicyIdentityUser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamRole">iam_role</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | Contains information for an IAM role identity in an access policy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamUser">iam_user</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | Contains information for an IAM user identity in an access policy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | Contains information for a user identity in an access policy. |

---

##### `iam_role`<sup>Optional</sup> <a name="iam_role" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamRole"></a>

```python
iam_role: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

Contains information for an IAM role identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#iam_role IotsitewiseAccessPolicy#iam_role}

---

##### `iam_user`<sup>Optional</sup> <a name="iam_user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.iamUser"></a>

```python
iam_user: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

Contains information for an IAM user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#iam_user IotsitewiseAccessPolicy#iam_user}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity.property.user"></a>

```python
user: IotsitewiseAccessPolicyAccessPolicyIdentityUser
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

Contains information for a user identity in an access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#user IotsitewiseAccessPolicy#user}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityIamRole <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamRole" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.property.arn">arn</a></code> | <code>str</code> | The ARN of the IAM role. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityIamUser <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.property.arn">arn</a></code> | <code>str</code> | The ARN of the IAM user. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

### IotsitewiseAccessPolicyAccessPolicyIdentityUser <a name="IotsitewiseAccessPolicyAccessPolicyIdentityUser" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.property.id">id</a></code> | <code>str</code> | The AWS SSO ID of the user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser.property.id"></a>

```python
id: str
```

- *Type:* str

The AWS SSO ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyAccessPolicyResource <a name="IotsitewiseAccessPolicyAccessPolicyResource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource(
  portal: IotsitewiseAccessPolicyAccessPolicyResourcePortal = None,
  project: IotsitewiseAccessPolicyAccessPolicyResourceProject = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.portal">portal</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | A portal resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.project">project</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | A project resource. |

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.portal"></a>

```python
portal: IotsitewiseAccessPolicyAccessPolicyResourcePortal
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

A portal resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#portal IotsitewiseAccessPolicy#portal}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource.property.project"></a>

```python
project: IotsitewiseAccessPolicyAccessPolicyResourceProject
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

A project resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#project IotsitewiseAccessPolicy#project}

---

### IotsitewiseAccessPolicyAccessPolicyResourcePortal <a name="IotsitewiseAccessPolicyAccessPolicyResourcePortal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.property.id">id</a></code> | <code>str</code> | The ID of the portal. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyAccessPolicyResourceProject <a name="IotsitewiseAccessPolicyAccessPolicyResourceProject" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.property.id">id</a></code> | <code>str</code> | The ID of the project. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IotsitewiseAccessPolicyConfig <a name="IotsitewiseAccessPolicyConfig" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_identity: IotsitewiseAccessPolicyAccessPolicyIdentity,
  access_policy_permission: str,
  access_policy_resource: IotsitewiseAccessPolicyAccessPolicyResource
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyIdentity">access_policy_identity</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | The identity for this access policy. Choose either a user or a group but not both. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyPermission">access_policy_permission</a></code> | <code>str</code> | The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyResource">access_policy_resource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_identity`<sup>Required</sup> <a name="access_policy_identity" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyIdentity"></a>

```python
access_policy_identity: IotsitewiseAccessPolicyAccessPolicyIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

The identity for this access policy. Choose either a user or a group but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#access_policy_identity IotsitewiseAccessPolicy#access_policy_identity}

---

##### `access_policy_permission`<sup>Required</sup> <a name="access_policy_permission" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyPermission"></a>

```python
access_policy_permission: str
```

- *Type:* str

The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#access_policy_permission IotsitewiseAccessPolicy#access_policy_permission}

---

##### `access_policy_resource`<sup>Required</sup> <a name="access_policy_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyConfig.property.accessPolicyResource"></a>

```python
access_policy_resource: IotsitewiseAccessPolicyAccessPolicyResource
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#access_policy_resource IotsitewiseAccessPolicy#access_policy_resource}

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentityIamRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

---


### IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentityIamUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

---


### IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole">put_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser">put_iam_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamRole">reset_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamUser">reset_iam_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iam_role` <a name="put_iam_role" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole"></a>

```python
def put_iam_role(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamRole.parameter.arn"></a>

- *Type:* str

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

##### `put_iam_user` <a name="put_iam_user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser"></a>

```python
def put_iam_user(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putIamUser.parameter.arn"></a>

- *Type:* str

The ARN of the IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}

---

##### `put_user` <a name="put_user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser"></a>

```python
def put_user(
  id: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.putUser.parameter.id"></a>

- *Type:* str

The AWS SSO ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reset_iam_role` <a name="reset_iam_role" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamRole"></a>

```python
def reset_iam_role() -> None
```

##### `reset_iam_user` <a name="reset_iam_user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetIamUser"></a>

```python
def reset_iam_user() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole">iam_role</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser">iam_user</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRoleInput">iam_role_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUserInput">iam_user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.userInput">user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_role`<sup>Required</sup> <a name="iam_role" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole"></a>

```python
iam_role: IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a>

---

##### `iam_user`<sup>Required</sup> <a name="iam_user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser"></a>

```python
iam_user: IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user"></a>

```python
user: IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a>

---

##### `iam_role_input`<sup>Optional</sup> <a name="iam_role_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRoleInput"></a>

```python
iam_role_input: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentityIamRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamRole">IotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

---

##### `iam_user_input`<sup>Optional</sup> <a name="iam_user_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUserInput"></a>

```python
iam_user_input: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentityIamUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityIamUser">IotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.userInput"></a>

```python
user_input: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentityUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentity">IotsitewiseAccessPolicyAccessPolicyIdentity</a>

---


### IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAccessPolicyAccessPolicyIdentityUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyIdentityUser">IotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

---


### IotsitewiseAccessPolicyAccessPolicyResourceOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourceOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal">put_portal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject">put_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetPortal">reset_portal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_portal` <a name="put_portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal"></a>

```python
def put_portal(
  id: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putPortal.parameter.id"></a>

- *Type:* str

The ID of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `put_project` <a name="put_project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject"></a>

```python
def put_project(
  id: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.putProject.parameter.id"></a>

- *Type:* str

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reset_portal` <a name="reset_portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetPortal"></a>

```python
def reset_portal() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal">portal</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project">project</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portalInput">portal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.projectInput">project_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal"></a>

```python
portal: IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project"></a>

```python
project: IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a>

---

##### `portal_input`<sup>Optional</sup> <a name="portal_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portalInput"></a>

```python
portal_input: IResolvable | IotsitewiseAccessPolicyAccessPolicyResourcePortal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.projectInput"></a>

```python
project_input: IResolvable | IotsitewiseAccessPolicyAccessPolicyResourceProject
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAccessPolicyAccessPolicyResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResource">IotsitewiseAccessPolicyAccessPolicyResource</a>

---


### IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAccessPolicyAccessPolicyResourcePortal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourcePortal">IotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

---


### IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference <a name="IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_access_policy

iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAccessPolicyAccessPolicyResourceProject
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAccessPolicy.IotsitewiseAccessPolicyAccessPolicyResourceProject">IotsitewiseAccessPolicyAccessPolicyResourceProject</a>

---



